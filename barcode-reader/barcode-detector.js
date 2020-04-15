/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".barcode-detector.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		4: function() {
/******/ 			return {
/******/ 				"./barcode.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_5dc0ce5e8a418e4a": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_log_5dc0ce5e8a418e4a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_captureVideoElementFrame_5881a956b2240b74": function() {
/******/ 						return installedModules[1].exports["__wbg_captureVideoElementFrame_5881a956b2240b74"]();
/******/ 					},
/******/ 					"__wbg_logPixelValue_ad3b504e0ffb3da8": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_logPixelValue_ad3b504e0ffb3da8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_logBarCodePositions_d732853d2aeef8cf": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_logBarCodePositions_d732853d2aeef8cf"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_a633dbe0900c728a": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_instanceof_Window_a633dbe0900c728a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_07444f1bbea314bb": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_document_07444f1bbea314bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_633c94a971ae0eb9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["__wbg_getElementById_633c94a971ae0eb9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_innerHTML_ebf37095d2177081": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["__wbg_innerHTML_ebf37095d2177081"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_06ca182218e69b94": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_instanceof_CanvasRenderingContext2d_06ca182218e69b94"](p0i32);
/******/ 					},
/******/ 					"__wbg_getImageData_cbb6a4ac4f2963e2": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules[1].exports["__wbg_getImageData_cbb6a4ac4f2963e2"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_instanceof_HtmlCanvasElement_c6a06fc9a851a478"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_e29d6e8a5c409d12": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_width_e29d6e8a5c409d12"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_f1097727b2ec35e1": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbg_height_f1097727b2ec35e1"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_2151b76e11a6eb39": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules[1].exports["__wbg_getContext_2151b76e11a6eb39"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_data_ffdaad41b1689f4a": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_data_ffdaad41b1689f4a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_804d3ad7e8acd4d5": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_call_804d3ad7e8acd4d5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_ebdc90c3d1e4e55d": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbg_newnoargs_ebdc90c3d1e4e55d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_48a5e9494e623f26": function() {
/******/ 						return installedModules[1].exports["__wbg_globalThis_48a5e9494e623f26"]();
/******/ 					},
/******/ 					"__wbg_self_25067cb019cade42": function() {
/******/ 						return installedModules[1].exports["__wbg_self_25067cb019cade42"]();
/******/ 					},
/******/ 					"__wbg_window_9e80200b35aa30f8": function() {
/******/ 						return installedModules[1].exports["__wbg_window_9e80200b35aa30f8"]();
/******/ 					},
/******/ 					"__wbg_global_7583a634265a91fc": function() {
/******/ 						return installedModules[1].exports["__wbg_global_7583a634265a91fc"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules[1].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules[1].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":[4]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "barcode_finder.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = (() => {
/******/ 	            if (typeof self !== 'undefined') {
/******/ 	                return self;
/******/ 	            } else if (typeof window !== 'undefined') {
/******/ 	                return window;
/******/ 	            } else if (typeof global !== 'undefined') {
/******/ 	                return global;
/******/ 	            } else {
/******/ 	                return Function('return this')();
/******/ 	            }
/******/ 	        })()["webpackJsonp"] = (() => {
/******/ 	            if (typeof self !== 'undefined') {
/******/ 	                return self;
/******/ 	            } else if (typeof window !== 'undefined') {
/******/ 	                return window;
/******/ 	            } else if (typeof global !== 'undefined') {
/******/ 	                return global;
/******/ 	            } else {
/******/ 	                return Function('return this')();
/******/ 	            }
/******/ 	        })()["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const rust_loader = __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 1));


rust_loader.then(function (data) {
    start_cam_worker.init(data);
}).catch((e) => console.log(e));

var pxValues = {0:[]};
var pxValuect = 0;
var pxDetected = {};
document.pxDetected = pxDetected;
var captureTime = new Date();
document.captureVideoElementFrame  = function(){
    let te = document.getElementById("barcode-time");
    te.innerText = new  Date() - captureTime + " ms";
    captureTime = new Date();
    start_cam_worker.captureImage();
};


document.logPixelValue = function(pxs){
    pxValues[pxValuect] = pxs.slice();
};

document.logBarCodePositions = function(pxs){
    if (pxDetected[pxValuect] === undefined) pxDetected[pxValuect] = [];
    pxDetected[pxValuect].push([pxs[0],pxs[1],pxs[2],pxs[3]]);
};

let start_cam_worker = (function () {
    let video = document.querySelector("video");
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let wasmCanvas = null;

    let controlButtons = {
        debugNav : [],
        debug : {},
        stop : {},
    };

    const constraints = {
        video: {
            width: { min: 1280, ideal: 1720, max: 1920 },
            height: { min: 720, ideal: 980, max: 1080 }
        }
    };

    let capturedImages = 0;
    let drawInterval = null;

    var startImageCapture = function(){
        capturedImages = 0;
        if (drawInterval !== null) return;
        drawInterval = true;
        pxValues = {0:[]};
        pxValuect = 0;
        captureImage();
    };

    var captureImage = function () {
        if(capturedImages > 30) {
            stopCamera();
            return;
        }
        setTimeout(function () {
            pxValuect++;
            pxValues[pxValuect] = [];
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            wasmCanvas.find_bar_code();
            capturedImages ++;
        },120)

    };


    let playbackTimeOut = null;




    var playOutColorChannel = (function(){
        let ct = 0;

        let navigate = function(forward){
            if(playbackTimeOut !== null)clearInterval(playbackTimeOut);
            playbackTimeOut = null;
            if (forward) {
                ct ++;
                if (pxValues[ct] === undefined) {
                    ct --;
                }
            } else {
                ct --;
                if (pxValues[ct] === undefined) {
                    ct ++;
                }
            }
            setDebugPicture();
        };

        var loopPlayBack = function(){
            ct = 0;
            setDebugPicture();
            playbackTimeOut = setInterval(function () {
                ct++;
                setDebugPicture();
            },1400);
        };


        var setDebugPicture = function () {
            if (pxValues[ct] === undefined) {
                if(playbackTimeOut !== null)clearInterval(playbackTimeOut);
                playbackTimeOut = null;
            }
            let detected = pxDetected[ct];
            if(detected === undefined) detected = {};
            else console.log(detected);
            let curImg = pxValues[ct];
            let newpx = context.createImageData(canvas.width, canvas.height);
            let ix = 0;
            let len = curImg.length;
            for(let c = 0; c<len;c++){
                newpx.data[ix] = curImg[c];
                newpx.data[ix+3] = 255;
                ix+=4;
            }
            let row = (canvas.width * 4);
            let colorPosition = function (pos) {
                let iter = 16;
                let start = pos - (iter/2)*row;
                if (start < 0) {
                    start = pos;
                    iter = (iter/2);
                }
                let end = pos + (iter/2)*row;
                if (end > newpx.length) end = newpx.length;
                console.log(Math.round(start/row),(start%row)/4);
                for(;start<=end;start += row){
                    newpx.data[start+1] = 255;
                    newpx.data[start]   = 0;
                    newpx.data[start-3] = 255;
                    newpx.data[start-4] = 0;
                }
            };
            for (let d in detected){
                let da = detected[d];
                let dix = da[0] * row;
                let start = dix + (da[2]*4);
                console.log(da,start,da[0],da[2],len);
                colorPosition(start);
                let end =   dix + (da[3]*4);
                colorPosition(end);

            }
            context.putImageData(newpx,0,0);
        };

        return {
            loopPlayBack:loopPlayBack,
            navigate:navigate
        }
    })();

    var stopCamera = function(){
        video.srcObject.getVideoTracks().forEach(track => track.stop());
        capturedImages = null;
    };

    var startCamera = async function(){
        canvas.style.display = "none";
        video.style.display = "block";
        video.srcObject.getVideoTracks().forEach(track => track.stop());
        document.getElementById("barcode-row").innerText = " --- ";
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        drawInterval = null;
    };

    video.addEventListener("playing",function () {
        positionVideo();
        startImageCapture();
    });

    var positionVideo = function () {
        let ww = window.innerWidth;
        let left = 0;
        if (video.videoWidth > ww){
            left = (video.videoWidth-ww) / 2;
        } else {
            ww = video.videoWidth;
        }
        video.style.left = -left+"px";
        video.parentElement.style.width = ww+"px";
        video.parentElement.style.height = video.videoHeight+"px";
    };

    window.addEventListener("resize",function () {
        positionVideo();
    });

    let setIsDebugMode = function(isDebug){
        if (isDebug){
            for (let i=0; i<controlButtons.debugNav.length;i++){
                controlButtons.debugNav[i].style.display = "inline-block";
            }
            controlButtons.debug.style.display = "none";
            controlButtons.stop.style.display = "none";
        } else {
            for (let i=0; i<controlButtons.debugNav.length;i++){
                controlButtons.debugNav[i].style.display = "none";
            }
            controlButtons.stop.style.display = "inline-block";
            controlButtons.debug.style.display = "inline-block";
        }

    };

    var createButtons = function(){
        let bnsCont = document.createElement("div");
        bnsCont.classList.add("control-buttons");
        let stopbutton = document.createElement("button");
        stopbutton.addEventListener("click",function () {
            stopCamera();
        });
        stopbutton.innerText = "STOP";
        bnsCont.appendChild(stopbutton);
        controlButtons.stop = stopbutton;

        let startbutton = document.createElement("button");
        startbutton.addEventListener("click",function () {
            setIsDebugMode(false);
            startCamera();
        });
        startbutton.innerText = "START";
        bnsCont.appendChild(startbutton);

        let downImage = document.createElement("button");
        downImage.addEventListener("click",function () {
            var img = canvas.toDataURL("image/jpeg");
            document.write('<img src="'+img+'"/>');
        });
        downImage.innerText = "DOWNLOAD";
        bnsCont.appendChild(downImage);

        let replayImage = document.createElement("button");
        replayImage.addEventListener("click",function () {
            canvas.style.display = "block";
            video.style.display = "none";
            capturedImages = 999;
            playOutColorChannel.loopPlayBack();
            setIsDebugMode(true);
        });
        replayImage.innerText = "DEBUG";
        controlButtons.debug = replayImage;
        bnsCont.appendChild(replayImage);

        let nav = document.createElement("button");
        nav.addEventListener("click",function () {
            playOutColorChannel.navigate(false);
        });
        nav.innerText = "<";
        nav.style.display = "none";
        bnsCont.appendChild(nav);
        controlButtons.debugNav.push(nav);
        nav = document.createElement("button");
        nav.addEventListener("click",function () {
            playOutColorChannel.navigate(true);
        });
        nav.innerText = ">";
        nav.style.display = "none";
        bnsCont.appendChild(nav);
        controlButtons.debugNav.push(nav);

        document.getElementById("main-video").appendChild(bnsCont);
    };

    async function init_draw(wasm) {
        wasmCanvas = new wasm.Canvas(canvas.id);
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = stream;
            createButtons();
        } catch (e) {
            console.log(e.toString());
        }
    }

    return {
        init: init_draw,
        captureImage:captureImage
    }
})();


/***/ })
/******/ ]);