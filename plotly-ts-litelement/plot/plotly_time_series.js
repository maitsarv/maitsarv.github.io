var plotlyTimeSeries=function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=function(){let e={setup_by_cat:{},setup_by_code:{},cat_by_code:{},current_time:new Date,defaultXRange:[new Date((new Date).setDate((new Date).getDate()-7)),new Date],defaultHistogramSetup:{opacity:.22},defaultChartColors:{"1f77b4":!1,"63b800":!1,e15b00:!1,"000000":!1,dcc539:!1,"8e3900":!1,"00b9e2":!1,ff00e5:!1,F0344F:!1},supportedPlotTypes:{scatter:!1,histogram:!1},yAxisTicks:6},t={fetchGlobalSetup:null,setupByCode:null,setupByCat:null},l={default:[],plot:{}},n=function(e,t){let n=l.default;null!==e&&void 0!==l.plot[e]&&(n=l.plot[e]);let o=n[1];return null===o&&(o=[]),o.push("req="+t),o=o.join("&"),n=n[0]+"?"+o,n},o=function(l,o){return Array.isArray(l)||(l=[l]),null!==t.setupByCode?new Promise((n,a)=>{Promise.resolve(t.setupByCode(l,o,e)).then((function(){for(let t=0;t<l.length;t++)void 0===e.setup_by_code[l[t]]&&(e.setup_by_code[l[t]]=null);n()}))}):new Promise((t,a)=>{let i=n(o);$.ajax({url:i,method:"GET",data:{codes:l},success:function(l){if(l.success&&void 0!==l.codesetup)for(let t in l.codesetup)e.setup_by_code[t]=l.codesetup[t];if(void 0!==l.codecat)for(let t in l.codecat)e.cat_by_code[t]=l.codecat[t];t()},error:function(){t()}})})},a=function(t,l){let n={unit:"",unithtml:"",plot_type:"scatter",normalize:!1,groupnorm:null,yaxis:null,opacityMap:{},desc:""};if(void 0!==e.cat_by_code[t]){let l=e.cat_by_code[t];if(void 0!==e.setup_by_cat[l])for(let t in e.setup_by_cat[l])n[t]=e.setup_by_cat[l][t]}if(void 0!==e.setup_by_code[t]&&null!==e.setup_by_code[t])for(let l in e.setup_by_code[t])n[l]=e.setup_by_code[t][l];return n};return{values:e,requestURLs:l,overWriteFunctions:t,setRequestURL:function(e,t,n){null===e?l.default=[t,n]:l.plot[e]=[t,n]},getCodeSetup:async function(t,l,n){return void 0!==e.setup_by_code[t]||await o(t,l),a(t)},getInitialPlotLayout:function(){var t={y_temp:"°C",y_percent:"SW",y_pres:"bar",y_presk:"kPa",y_tempdelta:"Δ°C",y_hour:"h",y_freq:"Hz",y_volume_ms:"m³/s",y_speed:"m/s",y_volume_ls:"L/s",y_volume_lh:"l/h",y_volume_mh:"m³/h",y_volume:"m³",y_power_k:"kW",y_power:"W",y_ppm:"ppm",y_ppb:"ppb",y_energy:"kWh",y_energy_wh:"Wh",y_eur:"EUR",y_rpm:"rpm",y_state:"St"},l={y_percent_stacked:{range:[0,100],fixedrange:!0},y_percent:{range:[0,101],fixedrange:!0},y_temp:{rangemode:"normal"},y_state:{range:[0,100],fixedrange:!0,autorange:!1}},n={showlegend:!1,autosize:!0,responsive:!0,margin:{b:8,t:20,l:40,r:40,pad:2},plot_bgcolor:"rgba(255,255,255,0)",bargap:.05,xaxis:{domain:[0,.9],hoverformat:"%Y-%m-%d %H:%M",tickformat:"%m-%d %H:%M",tickformatstops:[{dtickrange:[864e5,6048e5],value:"%m-%d"},{dtickrange:[6048e5,"M1"],value:"%m-%d"},{dtickrange:["M1","M12"],value:"%Y-%m"},{dtickrange:["M12",null],value:"%Y"}],rangeslider:{},type:"date",calendar:"gregorian",spikethickness:1,showspikes:!1,range:[new Date(e.defaultXRange[0].valueOf()),new Date(e.defaultXRange[1].valueOf())]}};let o=1,a={};var i={},r=[];for(let s in t){if(void 0!==a[s])continue;let u={titlefont:{color:"#686868"},tickfont:{color:"#668866"},side:"left",showline:!1,showgrid:!1,zeroline:!1,showticklabels:!1,xaxis:"x1",rangemode:"tozero",fixedrange:!1,hoverformat:".2f",hoverinfo:"y+name",spikethickness:1,showspikes:!1,autorange:!1,nticks:e.yAxisTicks},p={xref:"paper",yref:"paper",x:0,xanchor:"right",y:1,yanchor:"bottom",text:t[s],font:{size:12,color:"rgba(0,0,0,0)"},showarrow:!1};if(o>1&&(u.overlaying="y"),void 0!==l[s])for(let e in l[s])u[e]=l[s][e];o>1?(p.axis="yaxis"+o,n["yaxis"+o]=u,a[s]=o):(p.axis="yaxis",n.yaxis=u,a[s]=""),r.push(p),i[s]=0,o++}return[n,i,r,a,t]},fetchSetupByCode:o,fetchGlobalSetup:function(l){if(null!==t.fetchGlobalSetup)return new Promise((l,n)=>{Promise.resolve(t.fetchGlobalSetup(e)).then((function(){l()}))});let o=n(l,"global-setup");$.ajax({url:o,method:"GET",success:function(t){if(t.success){if(void 0!==t.codesetup)for(let l in t.codesetup)e.setup_by_code[l]=t.codesetup[l];if(void 0!==t.catsetup)for(let l in t.catsetup)e.setup_by_cat[l]=t.catsetup[l];if(void 0!==t.codecat)for(let l in t.codecat)e.cat_by_code[l]=t.codecat[l]}else alert("Could not load setup")}})},getQueryUrl:n}},o=function(e,t){let l=function(){let e=function(){let e=[],t=!1;var l=function(){if(e.length>0){t=!0;let n=e.shift(),o=n[0].apply(null,n[1]);void 0!==o&&"function"==typeof o.then?o.then((function(){void 0!==n[2]&&"function"==typeof n[2]&&n[2](),l()})):(void 0!==n[2]&&"function"==typeof n[2]&&n[2](),l())}else t=!1};return{addToQueue:function(n,o,a){e.push([n,o,a]),!1===t&&l()}}}(),t={JSON_PARSE:function(e){e.values=JSON.parse(e.values)},TYPE_CONVERSION:function(e){for(let t=0;t<e.values.length;t++)e.values[t][0]=new Date(e.values[t][0]).getTime()/1e3,e.values[t][1]=parseFloat(e.values[t][1]).toFixed(2)},CSV_SIMPLE:function(e){let t=e.values;t=t.split("\n"),t.length>0?e.values=l(t):e.values=[]},CSV_W_HEADER:function(e){let t=e.values;t=t.split("\n"),t.length>1?(t.shift(),e.values=l(t)):e.values=[]},REMOVE_REPEATING_ROW:function(e){let t=[],l=null;for(let n=0;n<e.values.length;n++)e.values[n][1]!==l&&(t.push(e.values[n]),l=e.values[n][1]);e.values=t}},l=function(e){for(let t=0;t<e.length;t++)e[t]=e[t].split(","),e[t]=[new Date(e[t][0]).getTime()/1e3,parseFloat(e[t][1]).toFixed(2)];return e};var n={x:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],l=0;l<t.length;l++)try{e=new ActiveXObject(t[l]);break}catch(e){}return e},send:function(e,t,l,o,a){var i=n.x(),r=[];for(var s in l)r.push(encodeURIComponent(s)+"="+encodeURIComponent(l[s]));"GET"===t?(e+=r.length?"?"+r.join("&"):"",l=""):"POST"===t&&(l=r.join("&")),i.open(t,e,!0),i.onreadystatechange=function(){4===i.readyState&&o(i.responseText)},"POST"===t&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded");for(let e in a)i.setRequestHeader(e,a[e]);i.send(l)},get:function(e,t,l,o){var a=[];for(var i in t)a.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));n.send(e+(a.length?"?"+a.join("&"):""),l,"GET",null,o)},post:function(e,t,l,o){var a=[];for(var i in t)a.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));n.send(e,l,"POST",a.join("&"),o)}};let a={updateButtonState:function(e,t,l){e.style.backgroundColor=l,t?e.classList.add("active"):e.classList.remove("active")},buttonStateUpdateCallback:function(e,t,l){}};return{queue:e,dataFormatters:t,ajax:n,findNewButtonColor:function(e){let t=null;if(null!=e&&(e=e.replace("#",""),!0!==o.datasetColors[e]))return t="#"+e,o.datasetColors[e]=!0,t;for(let e in o.datasetColors)if(!1===o.datasetColors[e]){t="#"+e,o.datasetColors[e]=!0;break}return t},releaseButtonColor:function(e){e=e.replace("#",""),o.datasetColors[e]=!1},getRangeAsDate:function(e){let t=e[0],l=e[1];return"string"==typeof t&&(t=new Date(t)),"string"==typeof l&&(l=new Date(l)),[t,l]},setButtonStateByColor:function(e,t,l){null!==t?(e.visible=!0,e.color=t,o.activeCodes[l]=!0,void 0!==e.htmlelement?a.updateButtonState(e.htmlelement,!0,t):a.buttonStateUpdateCallback(l,!0,t)):(e.visible=!1,delete o.activeCodes[l],void 0!==e.htmlelement?a.updateButtonState(e.htmlelement,!1,"transparent"):a.buttonStateUpdateCallback(l,!1,"transparent"))},DOMupdates:a}}(),n={queryData:null},o={plot:{},elems:{},axes:{axisActiveCount:{},axisTitles:{},axisMap:{}},shapeGroups:{},datasetColors:{},pendingSetup:[],unit_to_axes:{},timeformat:"unix",activeCodes:{},modebar:{}},a={getStateAnnotations:function(e){var t,l,n=[];let a={},i=o.shapeGroups;for(let e in i)i[e].length>0&&!0===i[e][0].visible&&(a[i[e][0].y0]=!0);for(var r=0;!0===a[r];)r+=2;for(let i in e)if(e.hasOwnProperty(i)){let u=e[i].values,p=o.elems[i];p.index=null,u.length>0&&(u[0][0]=new Date(1e3*u[0][0]));for(var s=0;s<u.length;s++){t=0,l=null;let e=parseInt(u[s][1]);0!==u[s][0]&&(t=u[s][0]);let a=u[s+1];void 0!==a?(a[0]=new Date(1e3*a[0]),l=a[0]):l=o.plot.layout.xaxis.range[1];let d=p.opacityMap[e];void 0===d&&(d=.04+.12*e);let c={id:"state_"+i+"_"+s,type:"rect",xref:"x",yref:"y"+o.axes.axisMap[p.yaxis],x0:t,y0:r,x1:l,y1:r+2,fillcolor:p.color,opacity:d,visible:p.visible,line:{width:0}};n.push(c),void 0===o.shapeGroups[i]&&(o.shapeGroups[i]=[]),o.shapeGroups[i].push(c)}if(!0===p.visible)for(r+=2;!0===a[r];)r+=2}return n},appendStateDataToPlot:function(e,l,n){let a=o.shapeGroups[e],i=null,r={};a.length>0?(i=a[0],r=i):r={id:"",type:"rect",xref:"x",yref:"y",x0:0,y0:0,x1:t.values.current_time,y1:2,fillcolor:"#888888",opacity:.5,visible:!1,labeltext:"",line:{width:0}};let s=[],u=o.elems[e];l.length>0&&(l[0][0]=new Date(1e3*l[0][0]));for(let t=0;t<l.length;t++){let a=parseInt(l[t][1]),p=u.opacityMap[a];void 0===p&&(p=.04+.12*a);let d=0,c=null;0!==l[t][0]&&(d=l[t][0]),void 0!==l[t+1]&&0!==l[t+1][0]?(l[t+1][0]=new Date(1e3*l[t+1][0]),c=l[t+1][0]):c=o.plot.layout.xaxis.range[1];let f=!0;"prepend"===n&&void 0===l[t+1]&&null!==i&&(i.opacity===p?(f=!1,i.x0=d):c=i.x0);let m={id:"state_"+e+"_"+t,type:"rect",xref:"x",yref:"y"+o.axes.axisMap[u.yaxis],x0:d,y0:r.y0,x1:c,y1:r.y1,fillcolor:r.fillcolor,opacity:p,visible:u.visible,line:{width:0}};f&&s.push(m)}if("prepend"===n)for(let t=s.length-1;t>=0;t--)o.plot.layout.shapes.push(s[t]),o.shapeGroups[e].unshift(s[t]);if("append"===n)for(let t=0;t<s.length;t++)o.plot.layout.shapes.push(s[t]),o.shapeGroups[e].unshift(s[t])},toggleStateAnnotations:function(e,t,l){if(void 0!==o.shapeGroups[t])if(!0===e){let n=0,a={},i=o.shapeGroups;for(let e in i)i[e].length>0&&!0===i[e][0].visible&&(a[i[e][0].y0]=!0);for(;!0===a[n];)n+=2;let r=n+2;for(let a=0;a<o.shapeGroups[t].length;a++)o.shapeGroups[t][a].visible=e,o.shapeGroups[t][a].fillcolor=l,o.shapeGroups[t][a].y0=n,o.shapeGroups[t][a].y1=r}else for(let n=0;n<o.shapeGroups[t].length;n++)o.shapeGroups[t][n].visible=e,o.shapeGroups[t][n].fillcolor=l}},i=function(a){return new Promise((i,r)=>{let s=function(e,t){let l=e.length,n=l-1;for(;n>=0&&!(e[n][0]<t);n-=10);let o=10;if(n<=0)o=10+n,n=0;else if(n===l-1)return e;for(let l=0;l<=o&&!(e[n][0]>=t);l++)n++;e.splice(n)},u=function(e,t){for(var l=0;l<e.length&&!(e[l][0]>t);l+=10);let n=10;l>=e.length-1?(n=10-(l-e.length),l=e.length):0===l&&(n=0,e[l][0]>t&&(l=-1));for(let o=0;o<n&&!(e[--l][0]<=t);o++);e.splice(0,l+1)},p=function(e){let[n,a]=l.getRangeAsDate(o.plot.layout.xaxis.range);console.log(n,a,t.values.defaultXRange),n>t.values.defaultXRange[0]&&(n=new Date(t.values.defaultXRange[0].valueOf())),a<t.values.defaultXRange[1]&&(a=new Date(t.values.defaultXRange[1].valueOf()));let i=parseInt(n.getTime()/1e3),r=parseInt(a.getTime()/1e3),s={codes:{}};for(let t in e){let l=e[t],n=o.elems[l],a=i,u=r;if(void 0!==n.index&&null!==n.index&&n.index.length>0){let e=o.plot.data[n.index[0]].x[0];e=parseInt(e.getTime()/1e3),u=e}else if(void 0!==o.shapeGroups[l]&&o.shapeGroups[l].length>0){let e=o.shapeGroups[l][0];u=parseInt(e.x0/1e3)}a>=u||(void 0!==n.group?void 0!==n.query_group&&!0===n.query_group?s[n.group]=[a,u]:(void 0===s[n.group]&&(s[n.group]={}),s[n.group][l]=[a,u]):s.codes[l]=[a,u])}return s}(a),d={};var c;d=null!==n.queryData?Promise.resolve(n.queryData(p)):new Promise((n,o)=>{l.ajax.send(t.getQueryUrl(e,"time-data"),"POST",c,(function(e){n(e)}))}),d.then((function(e){let t=function(e){let t=[{},{}];for(let n in e)for(let a in e[n]){let i=[],r=o.elems[a],p={mode:"append",structure:void 0===r.datastructure?"row":r.datastructure,values:[]};Array.isArray(e[n][a])?p.values=e[n][a]:(p.values=e[n][a].values,void 0!==e[n][a].format&&(i=e[n][a].format)),"y_state"!==r.yaxis&&!0!==r.isState||i.unshift("REMOVE_REPEATING_ROW");for(let e=0;e<i.length;e++){let t=i[e];void 0!==l.dataFormatters[t]&&"function"==typeof l.dataFormatters[t]&&l.dataFormatters[t](p)}if("row"===p.structure&&p.values.length>0){let e=p.values[0][0];if(e!==parseInt(e)){console.warn(a+": Time format after data formatters is not correct. Expected unix timestamp format");continue}let t=p.values[p.values.length-1][0];if(void 0!==r.index&&null!==r.index){let l=o.plot.data[r.index[0]].x,n=l.length;if(n>0){let o=l[0],a=l[n-1];o>e?(p.mode="prepend",t>o&&s(p.values,o)):e<a&&u(p.values,a)}}else if(void 0!==o.shapeGroups[a]){let l=o.shapeGroups[a].length;if(l>0){let n=o.shapeGroups[a][0].x0,i=o.shapeGroups[a][l-1].x1;n>e?(p.mode="prepend",t>n&&s(p.values,n)):e<i&&u(p.values,i)}}}"y_state"===r.yaxis||!0===r.isState?t[1][a]=p:t[0][a]=p}return t}(e);i(t)}))})};var r=function(e,t,l){t=function(t){let l={min:Array(t.length),max:Array(t.length)};null===e.linkedValues.extremes.absMin.y&&t.length>0&&(e.linkedValues.extremes.absMin={x:t[0][0].min,y:t[0][1].min},e.linkedValues.extremes.absMax={x:t[0][0].max,y:t[0][1].max});for(let n=0;n<t.length;n++){const o=t[n];l.min[n]={x:o[0].min,y:o[1].min,ct:o[2]},l.max[n]={x:o[0].max,y:o[1].max,ct:o[2]},e.linkedValues.extremes.absMin.y>o[1].min&&(e.linkedValues.extremes.absMin={x:o[0].min,y:o[1].min}),e.linkedValues.extremes.absMax.y<o[1].max&&(e.linkedValues.extremes.absMax={x:o[0].max,y:o[1].max})}return l}(t);let n=e.linkedValues.extremes.min.length;if(0===n)e.linkedValues.extremes.min=t.min,e.linkedValues.extremes.max=t.max;else if("prepend"===l){let l=t.min[t.min.length-1],n=e.linkedValues.extremes.min[0],o=t.max[t.max.length-1],a=e.linkedValues.extremes.max[0],i=l.ct+n.ct;if(i<400){let r={},s={};r=l.y<n.y?{x:l.x,y:l.y,ct:i}:{x:n.x,y:n.y,ct:i},s=o.y>a.y?{x:o.x,y:o.y,ct:i}:{x:a.x,y:a.y,ct:i},e.linkedValues.extremes.min.unshift(r),e.linkedValues.extremes.max.unshift(s);for(let l=t.min.length-2;l>=0;l--)e.linkedValues.extremes.min.unshift(t.min[l]),e.linkedValues.extremes.min.unshift(t.max[l])}else e.linkedValues.extremes.min.unshift(...t.min),e.linkedValues.extremes.max.unshift(...t.max)}else{let l=t.min[0],o=e.linkedValues.extremes.min[n-1],a=t.max[0],i=e.linkedValues.extremes.max[n-1],r=l.ct+o.ct;if(r<400){let n={},s={};n=l.y<o.y?{x:l.x,y:l.y,ct:r}:{x:o.x,y:o.y,ct:r},s=a.y>i.y?{x:a.x,y:a.y,ct:r}:{x:i.x,y:i.y,ct:r},e.linkedValues.extremes.min.push(n),e.linkedValues.extremes.max.push(s);for(let l=1;l<t.min.length;l--)e.linkedValues.extremes.min.push(t.min[l]),e.linkedValues.extremes.min.push(t[l].max[l])}else e.linkedValues.extremes.min.push(...t.min),e.linkedValues.extremes.max.push(...t.max)}},s=function(e,t,l){return void 0===t.linkedValues&&(t.linkedValues={}),void 0!==e.structure&&"trace"===e.structure?function(e,t,l){let n=[[],[]],o=e.values;if(0===o.length)return n;let a=o[0].length;if(0===a)return n;if(void 0===t.linkedValues.extremes&&(t.linkedValues.extremes={min:[],max:[],absMin:{x:null,y:null},absMax:{x:null,y:null}}),void 0!==t.normalize&&!1!==t.normalize);else{for(let e=0;e<a;e++)n[0].push(new Date(1e3*parseInt(o[0][e])));n[1]=o[1]}return[n[0],n[1]]}(e,t):function(e,t,l){let n=[[],[]],o=e.values,a=[];if(0===o.length)return n;void 0===t.linkedValues.extremes&&(t.linkedValues.extremes={min:[],max:[],absMin:{x:null,y:null},absMax:{x:null,y:null}});let i=[];if(void 0!==t.normalize&&!1!==t.normalize){let e=600,i=2*e;!0!==t.normalize&&(e=t.normalize);let r=0,s=0,u=t.linkedValues.firstValue,p=1;if("prepend"===l&&(t.linkedValues.firstValue=o[0],void 0===t.linkedValues.lastValue&&(t.linkedValues.lastValue=o[o.length-1]),r=o[0],s=o[1]),"append"===l){let e=o[o.length-1];r=t.linkedValues.lastValue[0],s=t.linkedValues.lastValue[1],t.linkedValues.lastValue=e,t.linkedValues.firstValue&&(t.linkedValues.firstValue=o[0]),p=0}for(;p<o.length;p++){let t=parseInt(o[p][0]),l=t-r;if(!(l<e)){if(l<=i){n[0].push(new Date(1e3*t));let e=o[p][1]-s;n[1].push(e)}else a.push([r,t]);s=o[p][1],r=t}}if("prepend"===l&&void 0!==t.index&&void 0!==u){let t=u[0]-r;t<=i&&t>=e&&(n[0].push(new Date(1e3*u[0])),n[1].push(u[1]-s))}}else if(null!==t.groupnorm){if(o.length>0){let e=o.length,l=t.legend.length;n[1]=new Array(l);for(let t=0;t<l;t++)n[1][t]=new Array(e);for(let t=0;t<e;t++){n[0].push(new Date(1e3*parseInt(o[t][0])));for(let e=0;e<l;e++)n[1][e][t]=o[t][e+1],n[1][e][t]=parseFloat(n[1][e][t])}}}else{let e=[{min:o[0][0],max:o[0][0]},{min:o[0][1],max:o[0][1]},0];for(let t=0;t<o.length;t++)o[t][1]=parseFloat(o[t][1]),e[2]>=400&&(i.push(e),e=[{min:o[t][0],max:o[t][0]},{min:o[t][1],max:o[t][1]},0]),o[t][1]<e[1].min?(e[1].min=o[t][1],e[0].min=o[t][0]):o[t][1]>e[1].max&&(e[1].max=o[t][1],e[0].max=o[t][0]),n[0].push(new Date(1e3*parseInt(o[t][0]))),n[1].push(o[t][1]),e[2]++;i.push(e)}return r(t,i,l),[n[0],n[1]]}(e,t,l)},u=function(e,t,l){let n=o.elems[t],a={};if(void 0!==n.index){if(void 0!==l){let e=o.plot.data[n.index[0]];a.line=e.line,a.line.color=l,a.marker=e.marker,a.marker.color=l}a.visible=e}return a},p=function(e){let t=o.plot.layout,l={};e&&(l=t);let n=t.annotations,a={};for(let e in n)a[n[e].axis]=n[e];var i=[];for(let e in o.axes.axisActiveCount)if(o.axes.axisActiveCount[e]>0)i.push(e);else{let n="yaxis"+o.axes.axisMap[e];!1!==t[n].showline&&(l[n]=t[n],l[n].showline=!1,l[n].zeroline=!1,l[n].showgrid=!1,l[n].showticklabels=!1,l[n].side="right",l[n].anchor="x",l[n].position=0,l[n].title={font:{color:"rgba(0,0,0,0)"}}),a[n].font.color="rgba(0,0,0,0)"}for(let e=0;e<i.length;e++){var r=i[e];let n="yaxis"+o.axes.axisMap[r];if(l[n]=t[n],l[n].title={font:{color:"#888888"}},a[n].font.color="#888888",0===e)l[n].side="left",l[n].showline=!0,l[n].showgrid=!0,l[n].showticklabels=!0,a[n].x=0,a[n].xref="paper",a[n].xanchor="right";else{l[n].showline=!0,l[n].showgrid=!0,l[n].showticklabels=!0,l[n].side="right",void 0!==t.xaxis.range?a[n].x=t.xaxis.range[1]:a[n].x=(new Date).getTime(),a[n].xanchor="left";let o=.87+.03*e;e>1?(l[n].anchor="free",l[n].position=o):l[n].anchor="x",a[n].xref="paper",a[n].x=o}}return l},d=function(e){return new Promise((l,n)=>{0===e.length&&l(),i(e).then((function(e){let n=o.plot.layout,i=e[0],r=e[1];var u=[];for(let e in i){if(void 0!==o.elems[e]&&void 0!==o.elems[e].index)continue;let l=o.elems[e],a=l.color;var d=l.yaxis;let r=l.plot_type,p=s(i[e],l,i[e].mode);null==d&&(d="y_temp");let f=l.desc;if(null!==l.groupnorm){let t=l.legend,n=[];if(void 0!==t)for(let e=0;e<t.length;e++)n.push(t[e][2]);if(n.length>0){let e=n.join(",");n="linear-gradient(-45deg, "+e+")"}else n="#888888";void 0!==l.htmlelement&&l.htmlelement.setAttribute("bck-col",n);for(let n=0;n<t.length;n++){(c={id:e+"_"+n,visible:l.visible,name:t[n][0],x:p[0],y:p[1][n],yaxis:"y"+o.axes.axisMap[d],marker:{color:t[n][1],size:2},line:{color:t[n][1],width:1},fillcolor:t[n][1],mode:"lines",type:r,stackgroup:e,xcalendar:"gregorian",ycalendar:"gregorian",plfirstvalue:p[2]}).groupnorm=l.groupnorm,u.push(c)}}else{var c={id:e,visible:l.visible,name:f,x:p[0],y:p[1],yaxis:"y"+o.axes.axisMap[d],marker:{color:a,size:2},line:{color:a,width:1},mode:"lines",type:r,xcalendar:"gregorian",ycalendar:"gregorian",plfirstvalue:p[2]};let i=36e5;"histogram"===r&&(c.autobiny=!0,c.histfunc="sum",c.marker.line={color:c.marker.color,width:1},c.marker.opacity=t.values.defaultHistogramSetup.opacity,c.xbins={size:i},sharedBinningDataset[e]=c,void 0===n.updatemenus&&(n.updatemenus=updateMenus)),u.push(c)}}let f=a.getStateAnnotations(r);o.plot.layout.shapes=o.plot.layout.shapes.concat(f),p(!0);let x={};m.correctVisibleAxes(x)&&Plotly.relayout(o.plot,x).then((function(){!function(e){for(let t in e){let l=o.plot._fullLayout[t];if(void 0!==l&&(void 0===l._rangeInitial||0===o.plot.layout[t].firstView)){o.plot.layout[t].firstView=1;let n=e[t].range;l._rangeInitial=[n[0],n[1]],l.dtick=e[t].dtick}}}(x)}));let y=o.plot.data.length;for(Plotly.addTraces(o.plot,u);y<o.plot.data.length;y++){let e=o.plot.data[y].id;void 0!==o.plot.data[y].stackgroup&&(e=o.plot.data[y].stackgroup),void 0===o.elems[e].index&&(o.elems[e].index=[]),o.elems[e].index.push(y)}l()}))})},c=function(e){return new Promise((t,l)=>{0===e.length&&t(),i(e).then((function(e){let l=e[0],n=e[1],i={append:[[],[],[],[]],prepend:[[],[],[],[]]};for(let e in l){let t=o.elems[e],n=s(l[e],t,l[e].mode);null===t.groupnorm&&("append"===l[e].mode?(i.append[0].push(n[0]),i.append[1].push(n[1]),i.append[2].push(t.index[0])):(i.prepend[0].push(n[0]),i.prepend[1].push(n[1]),i.prepend[2].push(t.index[0])))}i.append[0].length>0&&Plotly.extendTraces(o.plot,{y:i.append[1],x:i.append[0]},i.append[2]),i.prepend[0].length>0&&Plotly.prependTraces(o.plot,{y:i.prepend[1],x:i.prepend[0]},i.prepend[2]);for(let e in n)a.appendStateDataToPlot(e,n[e].values,n[e].mode);t()}))})};async function f(n){let a=[],i={},r={};if(0===n.length)return;let s={};if(n[0]instanceof HTMLElement)for(let e=0;e<n.length;e++){let t=n[e].getAttribute("pl-code"),l=n[e].classList.contains("active");void 0===o.elems[t]?(o.pendingSetup.push(t),r[t]=n[e]):o.elems[t].htmlelement=n[e],l&&a.push(t);let s=n[e].getAttribute("y-axis");null!==s&&(i[t]=s),m.registerButtonClick(n[e])}else{const e=["color","fixedcolor"];for(let t=0;t<n.length;t++){let l=n[t].code,r=n[t].active;void 0===o.elems[l]&&o.pendingSetup.push(l),r&&a.push(l);let u=n[t].yaxis;void 0!==u&&(i[l]=u),s[l]={};for(let o=0;o<e.length;o++){let a=e[o];void 0!==n[t][a]&&(s[l][a]=n[t][a])}}}if(o.pendingSetup.length>0){await t.fetchSetupByCode(o.pendingSetup,e);for(let l=0;l<o.pendingSetup.length;l++){let n=o.pendingSetup[l];o.elems[n]=await t.getCodeSetup(n,e),void 0!==r[n]&&(o.elems[n].htmlelement=r[n])}}for(let e in s){let t=s[e];for(let l in t)o.elems[e][l]=t[l]}for(let e in i)o.elems[e].yaxis=i[e];return a.forEach(e=>{let t=o.elems[e],n="y_state"===t.yaxis||!0===t.isState,a=t.fixedcolor;null!==a&&""!==a&&void 0!==a||(void 0===t.color&&n&&(t.color="#888888"),a=l.findNewButtonColor(t.color)),l.setButtonStateByColor(t,a,e),t.visible&&!n&&o.axes.axisActiveCount[t.yaxis]++}),o.pendingSetup=[],d(a),Promise.resolve()}var m=function(){let e=function(e){void 0===e&&(e=this.getAttribute("pl-code"));let t=o.elems[e];if(void 0===t)return void console.warn("Invalid code in toggleDatasetState: "+e);let i="y_state"===t.yaxis||!0===t.isState,r={},s={};if(t.visible)i?a.toggleStateAnnotations(!1,e):(r=u(!1,e),o.axes.axisActiveCount[t.yaxis]--),l.releaseButtonColor(t.color),delete o.activeCodes[e],void 0!==t.htmlelement?l.DOMupdates.updateButtonState(t.htmlelement,!1,"transparent"):l.DOMupdates.buttonStateUpdateCallback(e,!1,"transparent"),t.visible=!1,s=p(!1),Plotly.update(o.plot,r,s,t.index[0]);else{let f=t.fixedcolor;if(null==f&&(i&&void 0===t.color&&(t.color="#888888"),f=l.findNewButtonColor(t.color)),l.setButtonStateByColor(t,f,e),!1===t.visible)return;i?a.toggleStateAnnotations(!0,e,f):(o.axes.axisActiveCount[t.yaxis]++,r=u(!0,e,f),void 0!==t.index&&(s=p(!1),n(s)),Plotly.update(o.plot,r,s,t.index)),void 0===t.index?l.queue.addToQueue(d,[[e]]):l.queue.addToQueue(c,[[e]],(function(){Plotly.redraw(o.plot)}))}};var t=[null,null];let n=function(e){let t=o.elems,l={},n={};for(let e in t){if(!0!==t[e].visible)continue;let a=t[e].yaxis;if(a="yaxis"+o.axes.axisMap[a],void 0===l[a]&&(l[a]=[0,20]),void 0===t[e].linkedValues)continue;let i=t[e].linkedValues.extremes,r=i.absMin.y,s=i.absMax.y;void 0!==r&&(l[a][0]>r&&(l[a][0]=r),l[a][1]<s&&(l[a][1]=s)),void 0===o.plot.layout[a].firstView&&(o.plot.layout[a].firstView=0),n[a]=o.plot.layout[a]}for(let t in e)!0===e[t].showline&&(n[t]=o.plot.layout[t]);let a=!1,r=o.modebar.querySelector(".modebar-btn[data-val='pan']");null!==r&&(a=r.classList.contains("active"));let s={};for(let e in l){let t=o.plot.layout[e];if(void 0===t.range)continue;let n=[l[e][0],l[e][1]],i=.05*(n[1]-n[0]),r=i;void 0!==t.dtick&&(i+=2*t.dtick);let u=[n[0]-r,n[1]+r];n[0]=n[0]-i,n[1]=n[1]+i;let p=[t.range[0],t.range[1]];if(a){if(p[0]<n[0]){let e=p[1]-p[0];p[0]=u[0],p[1]=u[0]+e}else if(p[1]>n[1]){let e=p[1]-p[0];p[1]=u[1],p[0]=u[1]-e}}else p[0]<n[0]&&(p[0]=u[0]),p[1]>n[1]&&(p[1]=u[1]);p[0]>p[1]&&(p[1]=p[0]+r),p[0]===t.range[0]&&p[1]===t.range[1]||(s[e]=[p[0],p[1]])}return i(n,l,s,e)},i=function(e,t,l,n){let o=!1,a=function(e,t,l){let n=e[1]-e[0],o=n/t;if(e[1]>0&&e[0]<0){let l=Math.ceil(e[1]/o);l+=Math.ceil(-1*e[0]/o),l>t&&(o=n/(t-1))}let a=(i=10,Math.pow(i,Math.floor(Math.log(o)/Math.LN10)));var i;let r=o/a;if(l){let e=Math.ceil(r);e-r>=.5&&(e-=.5),r=e*a,r>5&&r<10&&(r=10)}else{let e=1e3*r;e=Math.ceil(e),e/=1e3,r=e*a}return r};for(let i in e){let r=e[i];if(void 0===n[i]&&void 0===t[i])continue;let s=[0,20],u=null,p=0,d=!0;void 0!==t[i]&&(s[0]=t[i][0],s[1]=t[i][1],p=1),void 0!==r.range&&0!==r.firstView&&(void 0!==l[i]?(s=[l[i][0],l[i][1]],p=2):(s=[r.range[0],r.range[1]],p=3));let c=[s[0],s[1]];u=[s[0],s[1]],(u[0]>t[i][0]||u[1]<t[i][1])&&(d=!1);let f=a(u,5,d);if(s[0]<0)if(s[1]>0){let e=s[0]/f+.01*f;e=Math.floor(e),s[0]=f*e,s[1]=f*(5+e)}else s[0]=s[1]-5*f;else s[1]=s[0]+5*f;s[0]===c[0]&&s[1]===c[1]||(void 0===n[i]&&(n[i]=r),n[i].range=[s[0],s[1]],o=!0),r.dtick!==f&&(void 0===n[i]&&(n[i]=r),n[i].dtick=f,o=!0)}return o};var r=function(){if(function(e){if(null===t)return t=e,!0;let l=!1;return t[0]>e[0]&&(l=!0),t[1]<e[1]&&(l=!0),t=e,l}(l.getRangeAsDate(o.plot.layout.xaxis.range)))l.queue.addToQueue(c,[Object.keys(o.activeCodes)],(function(){let e={};!function(e){let t=l.getRangeAsDate(o.plot.layout.xaxis.range),n=o.plot.data,a=null,i=null;for(let e in n){let t=n[e].x.length;if(t>0){let l=n[e].x[0],o=n[e].x[t-1];(null===a||l<a)&&(a=l),(null===i||o>i)&&(i=o)}}let[r,s]=t,u=!1;r<a&&(o.plot.layout.xaxis.range[0]=a,u=!0),s>i&&(o.plot.layout.xaxis.range[1]=i,u=!0),u&&(e.xaxis=o.plot.layout.xaxis,e.xaxis.range=o.plot.layout.xaxis.range)}(e),n(e),Plotly.relayout(o.plot,e)}));else{let e={};n(e)&&Plotly.relayout(o.plot,e)}},s=0;return{registerButtonClick:function(t){t.addEventListener("click",(function(){e.call(this)}))},registerPlotRelayoutCallback:function(){o.plot.on("plotly_relayout",(function(e){s++,setTimeout((function(){--s<=0&&r()}),200),console.log("E",e)}))},toggleDatasetState:e,correctVisibleAxes:n}}();let x={createPlot:function(l){return new Promise(n=>{let a=l;if(null===a){a=function(e){let t=document.createElement("div"),l=document.createElement("div");return e.appendChild(t),e.appendChild(l),[t,l]}(document.getElementById(e))}let i=t.getInitialPlotLayout();!function(e){for(let t in e){let l=e[t].replace(/[^\x20-\x7E]/g,"");void 0===o.unit_to_axes[l]&&(o.unit_to_axes[l]=[]),o.unit_to_axes[l].push(t)}}(i[4]),o.axes.axisActiveCount=i[1],o.axes.axisTitles=i[2],o.axes.axisMap=i[3],i[0].annotations=i[2],i[0].shapes=[],Plotly.newPlot(a[0],[],i[0],{doubleClick:"reset"}).then((function(e){o.plot=e,m.registerPlotRelayoutCallback(),o.modebar=e.querySelector(".modebar-container"),n()}));for(let e in t.values.defaultChartColors)o.datasetColors[e]=t.values.defaultChartColors[e]})},registerButton:f,fetchGlobalSetup:t.fetchGlobalSetup};return{overWriteFunctions:n,registerButtons:function(e,t){l.queue.addToQueue(f,[e],t)},ajax:l.ajax,domUpdaters:l.DOMupdates,toggleDataSetState:m.toggleDatasetState,executeFunc:function(e,t){void 0!==x[e]&&l.queue.addToQueue(x[e],t)}}},a=function(){var e,t={},l=function(){let e={plotly:!1};if("undefined"==typeof Plotly)console.error("Could not find Plotly.js - download from https://github.com/plotly/plotly.js/");else if(void 0===Plotly.Plots||void 0===Plotly.Plots.allTypes)console.error("Invalid Plotly.js instance - Unable to find supported categories from Plotly.Plots.allTypes");else{let t={scatter:!1,histogram:!1},l={scatter:!1};for(let e=0;e<Plotly.Plots.allTypes.length;e++){let n=Plotly.Plots.allTypes[e];void 0!==t[n]&&(t[n]=!0,void 0!==l[n]&&(l[n]=!0))}let n=[];for(let e in l)!1===l[e]&&n.push(e);n.length>0?console.error("Could not find following required plot type(s): "+n.join(", ")):e.plotly=!0,e.plotTypes=t}return e};l();let a=function(t,o,a){(e=n()).values.supportedPlotTypes=l().plotTypes,e.setRequestURL(t,o,a)};return{getInstance:function(l,n,i){let[r,s]=function(e){let t="plot",l=null;if("string"===typeof e)t=e;else if(Array.isArray(e)){let n=e[0].id;t=null!==n?n:e[0].parentElement.id,l=e}return[t,l]}(l);return e||a(null,n,i),void 0===t[r]&&(t[r]=function(e,t,l){let n=o(e,t);return n.executeFunc("fetchGlobalSetup",[]),n.executeFunc("createPlot",[l]),n}(r,e,s)),t[r]},getSetup:function(t,l){return e||a(null,t,l),e}}}();t.default=a}]).default;