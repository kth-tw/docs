if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>l(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-bd9393cf"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"f3a538d96fc4b7b98d43e5d38046d329"},{url:"annotations.html",revision:"90213f848cc9e286444a46b4630f9233"},{url:"assets/404.97711997.js",revision:null},{url:"assets/404.html.0f07aaf0.js",revision:null},{url:"assets/404.html.37b0c78d.js",revision:null},{url:"assets/annotations.html.b238f469.js",revision:null},{url:"assets/annotations.html.bbdb123e.js",revision:null},{url:"assets/app.9ab352e8.js",revision:null},{url:"assets/authentication.html.e7deb10d.js",revision:null},{url:"assets/authentication.html.f80eede5.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/decorators.html.57094df6.js",revision:null},{url:"assets/decorators.html.b6a72127.js",revision:null},{url:"assets/descriptions.html.17a3cd78.js",revision:null},{url:"assets/descriptions.html.46e8ad53.js",revision:null},{url:"assets/di.html.6887d8d3.js",revision:null},{url:"assets/di.html.ffc7f935.js",revision:null},{url:"assets/err-422-swui.25b6edbd.png",revision:null},{url:"assets/error-handling.html.54fb0489.js",revision:null},{url:"assets/error-handling.html.c774ee0f.js",revision:null},{url:"assets/errors-client.e871ae56.png",revision:null},{url:"assets/errors-json-client.a72b4976.png",revision:null},{url:"assets/errors-json-server.58dc84b1.png",revision:null},{url:"assets/errors-server.06a3af98.png",revision:null},{url:"assets/examples.html.30402a8d.js",revision:null},{url:"assets/examples.html.3f4e57dd.js",revision:null},{url:"assets/faq.html.69c90938.js",revision:null},{url:"assets/faq.html.fb9153b0.js",revision:null},{url:"assets/file-upload.html.04f30595.js",revision:null},{url:"assets/file-upload.html.800968d1.js",revision:null},{url:"assets/generating.html.4653cc01.js",revision:null},{url:"assets/generating.html.5d78eeef.js",revision:null},{url:"assets/getting-started.html.f1f79f90.js",revision:null},{url:"assets/getting-started.html.fb20fc9c.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.197785bd.js",revision:null},{url:"assets/index.html.e790e8a4.js",revision:null},{url:"assets/introduction.html.472c4f78.js",revision:null},{url:"assets/introduction.html.bdaf2f71.js",revision:null},{url:"assets/jsdoc-alias.5462ac6e.png",revision:null},{url:"assets/jsdoc-method.2c3ab8e4.png",revision:null},{url:"assets/Layout.7ad6af1c.js",revision:null},{url:"assets/live-reloading.html.12054774.js",revision:null},{url:"assets/live-reloading.html.df670577.js",revision:null},{url:"assets/path-mapping.html.6896b582.js",revision:null},{url:"assets/path-mapping.html.fa388de1.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/routes.html.1cacf29b.js",revision:null},{url:"assets/routes.html.6bf6ec85.js",revision:null},{url:"assets/style.c3febf96.css",revision:null},{url:"assets/SwaggerUI.32dd25e5.png",revision:null},{url:"assets/swui-alias.650ebd8a.png",revision:null},{url:"assets/swui-endpoint-description.897bce30.png",revision:null},{url:"assets/SwUi-Response.53baa0c7.png",revision:null},{url:"assets/templates.html.9b5256c6.js",revision:null},{url:"assets/templates.html.e7eafc8d.js",revision:null},{url:"assets/upgrading.html.147a4ce3.js",revision:null},{url:"assets/upgrading.html.3a4f3249.js",revision:null},{url:"authentication.html",revision:"c38818b440c06f2f9f58c6d1edd08689"},{url:"decorators.html",revision:"2afa92836a3b4fb61a0c833d52cc75e9"},{url:"descriptions.html",revision:"e6aca87400b51d3d5192eddab4aa4f51"},{url:"di.html",revision:"ee30d1fbeb02575766a40274a64bc7ec"},{url:"error-handling.html",revision:"31adb6a66940fac42a24ea9b02671280"},{url:"examples.html",revision:"c06b3047e6c14be19a5729fb1e8ed5c7"},{url:"faq.html",revision:"b8ee4f22d9567780acd2f45179f9b287"},{url:"file-upload.html",revision:"d8b1932e52a852dd76e264bead58a65c"},{url:"generating.html",revision:"5d772c70b6ebacc56ad08e17288ff89d"},{url:"getting-started.html",revision:"e6d7f687a34796039493616d65418826"},{url:"index.html",revision:"b71284d01cec68d8f435c7bbf717e1e6"},{url:"introduction.html",revision:"7310567db84a804f850dcab8d79df2b0"},{url:"live-reloading.html",revision:"e7d4a0b045577761ba34b55de8031b07"},{url:"path-mapping.html",revision:"b0354520d3ea7a9d1627b6d2b84f4390"},{url:"routes.html",revision:"68110bdae7065b41db5473bcca55e6b3"},{url:"templates.html",revision:"9143ce36144bde9e33bccc8f810141df"},{url:"upgrading.html",revision:"8b04c6efa9da5389241a803b53f56d37"}],{})}));
