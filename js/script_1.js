window.cxs&&window.cxs.setOptions({prefix:"c2-"}),window.wsb=window.wsb||{},window.wsb.Theme18=window.wsb.Theme18||window.radpack("@widget/LAYOUT/bs-layout18-Theme-publish-Theme").then((function(e){return new e.default})),window.wsb.DynamicFontScaler=function(e){let t,{containerId:a,targetId:i,fontSizes:n,maxLines:o,prioritizeDefault:s}=e;if("undefined"==typeof document)return;const r=document.getElementById(a),l=document.getElementById(i);function d(e){return function(e){const t=parseInt(m(e,"padding-left")||0,10),a=parseInt(m(e,"padding-right")||0,10);return e.scrollWidth+t+a}(e)<=r.clientWidth&&function(e){const t=e.offsetHeight,a=parseInt(m(e,"line-height"),10)||1;return Math.floor(t/a)}(e)<=o}function c(){if(!r||!l||t===window.innerWidth)return;if(l.hasAttribute("data-font-scaled"))return void function(){l.removeAttribute("data-last-size");const e=document.querySelector(`#${i}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(r.querySelectorAll(`[data-scaler-id="scaler-${a}"]`)).sort(((e,t)=>n.indexOf(e.getAttribute("data-size"))-n.indexOf(t.getAttribute("data-size"))));if(r.clientWidth&&e.length){const t=r.style.width||"";r.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${r.clientWidth}px`}));const a=function(e){return e.find(d)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),r.style.width=t;const n=m(a,"font-size"),o=l.getAttribute("data-last-size");if(n&&n!==o){if(s){const e=m(l,"font-size");if(parseInt(n,10)>=parseInt(e,10))return}l.setAttribute("data-last-size",n);let e=document.querySelector(`#${i}-style`);e||(e=document.createElement("style"),e.id=`${i}-style`,document.head.appendChild(e)),e.textContent=`#${l.id} { font-size: ${n} !important; }`}}}function m(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}c(),window.addEventListener("resize",c)},window.wsb.DynamicFontScaler(JSON.parse('{"containerId":"logo-container-31226","targetId":"logo-text-31227","fontSizes":["xxlarge","xlarge","large"],"maxLines":3,"prioritizeDefault":true}')),window.wsb.DynamicFontScaler(JSON.parse('{"containerId":"logo-container-31235","targetId":"logo-text-31236","fontSizes":["xxlarge","xlarge","large"],"maxLines":1,"prioritizeDefault":true}')),window.wsb["context-bs-1"]=JSON.parse('{"env":"production","renderMode":"PUBLISH","fonts":["lato","default",""],"colors":["#2c5d96"],"locale":"en-PH","language":"en","resellerId":1,"internalLinks":{"d16660c6-3cb3-4ab7-bcc5-7dbc7b93e83e":{"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","widgetId":null,"routePath":"/"},"3aef5451-9c5c-4279-8a85-3d181893eed7":{"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","widgetId":null,"routePath":"/"}},"isHomepage":true,"navigationMap":{"75356e90-bea1-42e7-9c0a-b8a3a97b992d":{"isFlyoutMenu":false,"active":true,"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"910d72f2-dd3b-4512-b07e-a3c256768b29":{"isFlyoutMenu":false,"active":false,"pageId":"910d72f2-dd3b-4512-b07e-a3c256768b29","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#2c5d96","meta":{"primary":"rgb(44, 93, 150)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"lato","description":"Distinctive fonts that give you a friendly yet professional feel.","tags":["sans-serif","modern","clean"],"meta":{"order":19,"primary":{"id":"lato","name":"Lato","url":"//fonts.googleapis.com/css?family=Lato:400,700&display=swap","family":"\'Lato\', arial, sans-serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"1px"}},"alternate":{"id":"lusitana","name":"Lusitana","url":"//fonts.googleapis.com/css?family=Lusitana:400,700&display=swap","family":"\'Lusitana\', Georgia, serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"alternate":{"family":"Georgia, serif"}}},{"locales":["ta-IN","mr-IN","hi-IN"],"meta":{"alternate":{"family":"Georgia, serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}},{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"primary":{"family":"sans-serif"}}}]}}},"theme":"Theme18"}'),Core.utils.deferBootstrap({elId:"bs-1",componentName:"@widget/LAYOUT/bs-LinkAwareComponent",props:JSON.parse('{"toggleId":"more-31237","label":"More","dataAid":"NAV_MORE","navBarId":"navContainer-31232","widgetId":"1c4ea934-928f-499f-b665-ec6077e85454","section":"default","category":"accent","locale":"en-PH","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"widgetId":"1c4ea934-928f-499f-b665-ec6077e85454","widgetType":"HEADER","widgetPreset":"header9","group":"Nav","groupType":"Default","section":"default","category":"accent","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-1",radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},!1),window.wsb.CalculateSplitNavSpacing=function(e){let a,i,n,o,s,r,l,d,{containerId:c,navId:m,splitNavId:u,logoImageId:p,inlineUtilitiesMenu:g,forceBreakpoint:f}=e;const y=document.getElementById(m),b=document.getElementById(u);function h(){if(i||!y||!M(y))return;o=Array.from(y.children),n=Array.from(y.children),n.forEach(I),g&&(s=n.pop(),C(s)),r=n.pop();const e=r.querySelector("ul");l=e?Array.from(e.children):[],y.style.whiteSpace="normal",d=M(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(w)}function w(){const e=s&&s.querySelector("[data-ux='Pipe']");e&&S(e);const t=n,a=t.map((e=>M(e))),i=s?M(s):0;let c=0,m=a.concat(i).findIndex((e=>{if(c+e>d)return e;c+=e}));m<0&&(m=a.length);const u=a.slice(0,m);let p,g,f=a.slice(m);if(L(f)+i<d)p=!1,g=0;else{p=!0,g=M(r);let e=0,t=g+i;f.some((a=>{if(t+=a,t>=d)return!0;e++})),f=f.slice(0,e)}for(;u.length>1&&O(u,f.concat([g,i]).filter(Boolean));)f.unshift(u.pop());const y=Array.from(b.children);T(y,0,u.length,C),T(t,0,u.length,S),T(l,0,u.length,S),T(y,u.length,u.length+f.length,S),T(t,u.length,u.length+f.length,C),T(l,u.length,u.length+f.length,S),T(y,u.length+f.length,t.length,S),T(t,u.length+f.length,t.length,S),T(l,u.length+f.length,t.length,C),p?C(r):S(r),function(){const e=o.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e&&t.find((e=>"visible"===e.style.visibility))&&C(e),window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&f&&f!==t.Q||(window.clearTimeout(a),a=window.setTimeout(h,50))}function T(e,t,a,i){e=e.slice(t,a).map(i).concat(e.slice(a))}function I(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function S(e){e.style.display="none",e.classList.remove("visible")}function C(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function L(e){return e.reduce(((e,t)=>e+t),0)}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function O(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],i=L(e),n=L(t);return Math.abs(i-n)>Math.abs(i-a-(n+a))}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(c),document.getElementById(p)].forEach((t=>t&&e.observe(t))),()=>{i=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{i=!0,window.removeEventListener("resize",v,{passive:!0})}},window.wsb.CalculateSplitNavSpacing(JSON.parse('{"navId":"n-3122131231-navId-2","inlineUtilitiesMenu":false,"containerId":"navContainer-31232","splitNavId":"n-3122131230-navId-1"}')),window.wsb.DynamicFontScaler(JSON.parse('{"containerId":"tagline-container-31240","targetId":"dynamic-tagline-31241","fontSizes":["xxxlarge","xxlarge","xlarge"],"maxLines":4}')),window.wsb.DynamicFontScaler(JSON.parse('{"containerId":"tagline-container-31242","targetId":"dynamic-tagline-31243","fontSizes":["xxxlarge","xxlarge","xlarge"],"maxLines":4}')),window.wsb["context-bs-2"]=JSON.parse('{"env":"production","renderMode":"PUBLISH","fonts":["lato","default",""],"colors":["#2c5d96"],"fontScale":"medium","locale":"en-PH","language":"en","resellerId":1,"internalLinks":{"d16660c6-3cb3-4ab7-bcc5-7dbc7b93e83e":{"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","widgetId":null,"routePath":"/"},"3aef5451-9c5c-4279-8a85-3d181893eed7":{"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","widgetId":null,"routePath":"/"}},"isHomepage":true,"navigationMap":{"75356e90-bea1-42e7-9c0a-b8a3a97b992d":{"isFlyoutMenu":false,"active":true,"pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":true},"910d72f2-dd3b-4512-b07e-a3c256768b29":{"isFlyoutMenu":false,"active":false,"pageId":"910d72f2-dd3b-4512-b07e-a3c256768b29","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#2c5d96","meta":{"primary":"rgb(44, 93, 150)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"lato","description":"Distinctive fonts that give you a friendly yet professional feel.","tags":["sans-serif","modern","clean"],"meta":{"order":19,"primary":{"id":"lato","name":"Lato","url":"//fonts.googleapis.com/css?family=Lato:400,700&display=swap","family":"\'Lato\', arial, sans-serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"1px"}},"alternate":{"id":"lusitana","name":"Lusitana","url":"//fonts.googleapis.com/css?family=Lusitana:400,700&display=swap","family":"\'Lusitana\', Georgia, serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"alternate":{"family":"Georgia, serif"}}},{"locales":["ta-IN","mr-IN","hi-IN"],"meta":{"alternate":{"family":"Georgia, serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}},{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"primary":{"family":"sans-serif"}}}]}}},"theme":"Theme18"}'),Core.utils.deferBootstrap({elId:"bs-2",componentName:"@widget/CONTACT/bs-Component",props:JSON.parse('{"structuredHours":[{"hour":{"day":"Monday","dayOfWeek":1,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}},{"hour":{"day":"Tuesday","dayOfWeek":2,"openTime":"09:00","closeTime":"16:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Wednesday","dayOfWeek":3,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Thursday","dayOfWeek":4,"openTime":"09:00","closeTime":"16:00","byAppointmentOnly":false,"closed":true}},{"hour":{"day":"Friday","dayOfWeek":5,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}},{"hour":{"day":"Saturday","dayOfWeek":6,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}},{"hour":{"day":"Sunday","dayOfWeek":0,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}}],"staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"collapsible":true,"widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","section":"default","category":"neutral","locale":"en-PH","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"order":1,"widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","widgetType":"CONTACT","widgetPreset":"contact5","group":"Content","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-2",radpack:"@widget/CONTACT/bs-Component"},!1),Core.utils.deferBootstrap({elId:"bs-3",componentName:"@widget/CONTACT/bs-contact5-contact-form",props:JSON.parse('{"formTitle":"Drop us a line!","formFields":[{"type":"SINGLE_LINE","label":"Name","required":false,"keyName":"name"},{"type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true,"keyName":"email"},{"type":"MULTI_LINE","label":"Message","required":false,"keyName":"message"},{"type":"ATTACHMENT","label":"Attachments","required":false},{"type":"SUBMIT","label":"Send","required":false}],"blankInfo":false,"formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","showMap":true,"recaptchaEnabled":true,"recaptchaType":"V3","domainName":"rainwaterharvestingsystem.godaddysites.com","formSuccessMessage":"Thank you for your inquiry! We will get back to you within 48 hours.","formEnabled":true,"websiteId":"bdf53121-aa62-47bd-94bd-2d0cd5a9c5be","pageId":"75356e90-bea1-42e7-9c0a-b8a3a97b992d","accountId":"aad912e5-e4ae-11ed-82da-3417ebe60eb6","staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"emailOptInEnabled":false,"emailOptInMessage":"Sign up for our email list for updates, promotions, and more.","emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","section":"default","category":"neutral","locale":"en-PH","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"order":1,"widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","widgetType":"CONTACT","widgetPreset":"contact5","group":"Content","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-2",radpack:"@widget/CONTACT/bs-contact5-contact-form"},!1),Core.utils.deferBootstrap({elId:"bs-4",componentName:"@widget/CONTACT/bs-genericMap",props:JSON.parse('{"lat":"14.6491197","lon":"121.1121683","address":"12 Gen. Ordoñez Ave, Marikina, 1810 Metro Manila","type":"google","isEditMode":false,"zoom":14,"mapboxAccessToken":"pk.eyJ1IjoiZ29kYWRkeSIsImEiOiJjaWc5b20wcjcwczAydGFsdGxvamdvYnV0In0.JK9HuO6nAzc8BnMv6W7NBQ","mapboxStyleUrl":"mapbox://styles/godaddy/ciovyeygh0029atm6zbntgxk2","staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"viewDevice":null,"widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","section":"default","category":"neutral","locale":"en-PH","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"order":1,"widgetId":"ca01d3e4-c932-482f-a353-9dffabe8b528","widgetType":"CONTACT","widgetPreset":"contact5","group":"Map","groupType":"Banner","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-2",radpack:"@widget/CONTACT/bs-genericMap"},!1),window.wsb.CountdownScript=function(e){let t,a,{startDate:i,endDate:n,containerId:o,countdownId:s,toggleIds:r,ariaLabel:l,labels:d}=e,c=null;const{runningId:m,completeId:u}=r||{},p=Date.now();i=i||p;const g=i-p,f=n-p<0,y=f&&!r;function b(){document.getElementById(m).classList.add("d-none"),document.getElementById(u).classList.remove("d-none")}function h(){const e=document.getElementById(s),t={days:e.querySelector('[data-attr="countdown-days"]'),hours:e.querySelector('[data-attr="countdown-hours"]'),minutes:e.querySelector('[data-attr="countdown-minutes"]'),seconds:e.querySelector('[data-attr="countdown-seconds"]')};let i={};const u=()=>{const o=function(){const e=n-Date.now();let t=0,a=0,i=0,o=0;return e>0&&(t=Math.floor(e/1e3%60),a=Math.floor(e/1e3/60%60),i=Math.floor(e/36e5%24),o=Math.floor(e/864e5)),{total:e,days:o,hours:i,minutes:a,seconds:t}}();["days","hours","minutes","seconds"].forEach((e=>{if(i[e]!==o[e]){const a=t[e],i=a.children,n=Array.from(o[e].toString()).map(Number);n.length<2&&n.unshift("0"),n.length<i.length&&a.removeChild(i[0]),n.forEach(((e,t)=>{i[t]||a.appendChild(document.createElement("span")),i[t].textContent=e}))}})),e.setAttribute("aria-label",`\n        ${l} \n        ${o.days} ${d.days.label} \n        ${o.hours} ${d.hours.label} \n        ${o.minutes} ${d.minutes.label} \n        ${o.seconds} ${d.seconds.label}\n      `),i=o,o.total<=0&&(clearInterval(c),r&&(a=setTimeout((function(){b()}),3e3)))};document.getElementById(o).classList.remove("d-none"),r&&document.getElementById(m).classList.remove("d-none"),u(),c=setInterval(u,500)}return g>0?g<=2147483647&&(t=setTimeout(h,g)):f&&r?(document.getElementById(o).classList.remove("d-none"),b()):y||h(),()=>{t&&clearTimeout(t),c&&clearInterval(c),a&&clearTimeout(a)}},window.wsb.CountdownScript(JSON.parse('{"startDate":1682557200000,"endDate":1683594000000,"containerId":"b8a59065-adf6-4dc7-8743-52fc049d372131253Container","countdownId":"b8a59065-adf6-4dc7-8743-52fc049d372131253ContainerCountdown","toggleIds":{"runningId":"b8a59065-adf6-4dc7-8743-52fc049d372131253Running","completeId":"b8a59065-adf6-4dc7-8743-52fc049d372131253Complete"},"ariaLabel":"Countdown","labels":{"days":{"label":"Days","mobileLabel":"Days"},"hours":{"label":"Hours","mobileLabel":"Hrs"},"minutes":{"label":"Minutes","mobileLabel":"Mins"},"seconds":{"label":"Seconds","mobileLabel":"Secs"}}}')),Core.utils.renderBootstrap({elId:"bs-5",componentName:"@widget/MESSAGING/bs-Component",props:JSON.parse('{"config":{"formSubmitEndpoint":"/messaging","assetsHost":"https://img1.wsimg.com","assetsBasePath":"/isteam","contactsHost":"https://contacts.godaddy.com","conversationsWebHost":"https://conversations.godaddy.com","formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","generateUrlHost":"https://url-generator.apps.secureserver.net","vNextApiHost":"https://websites.api.godaddy.com","reamazeApiHost":"https://{{websiteId}}reamaze.godaddy.com","reamazeJsSource":"https://cdn.reamaze.com/assets/reamaze-loader.js","reamazeCookieJsSource":"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js"},"upgradeable":false,"preset":"messaging1","order":0,"id":"139cb21a-fb61-4021-893f-638d6f7f9db8","isMobile":null,"websiteId":"bdf53121-aa62-47bd-94bd-2d0cd5a9c5be","accountId":"aad912e5-e4ae-11ed-82da-3417ebe60eb6","isReseller":false,"domainName":"rainwaterharvestingsystem.godaddysites.com","staticContent":{"submitButtonLoadingLabel":"Sending","infoStartTitle":"Conversations","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","infoStartDesc":"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.","infoStartTag":"New","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","contactsLinkInfoMessaging":"Contacts from your website messaging form are captured in Connections.","defaultSubmitButtonLabel":"Send","endOfChat":"end of chat","infoConnectedDesc":"You are connected to the Conversations mobile app and are currently receiving all website messages there.","infoRecommendedTag":"Recommended","infoStartLink":"Get Started","phoneUsOnlyValidationErrorMessage":"Please enter a valid U.S. mobile phone number.","infoIncludedTag":"Included","infoPublishRequiredDesc":"A publish is needed in order to complete this first step of enabling this feature.","infoPendingLoginDesc":"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.","termsOfSerivce":"Terms of Service","infoUnavailableDesc":"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","privacyPolicyURL":"https://policies.google.com/privacy","infoUnavailableTitle":"Conversations","requiredValidationErrorMessage":"Please fill in this required field","infoUnavailableTag":"Unavailable","contactsLinkText":"Manage my contacts","privacyPolicy":"Privacy Policy","infoPublishRequiredLink":"Publish Now","infoPendingLoginLink":"Resend Link","infoConnectedTitle":"Conversations Mobile App","termsOfSerivceURL":"https://policies.google.com/terms","messagesRatesLegalDisclosure":"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.","emailMaxCountValidationErrorMessage":"Your email address is too long","infoConnectedTag":"Connected"},"businessName":"RainwaterHarvestingSystem","reamazeBrandId":"bdf53121-aa62-47bd-94bd-2d0cd5a9c5be","emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","recaptchaType":"V3","formFields":[{"keyName":"name","type":"SINGLE_LINE","label":"Name","validation":"required","required":true},{"keyName":"phone","type":"PHONE","label":"Mobile","validation":"phone","required":true},{"keyName":"email","type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true},{"keyName":"message","type":"MULTI_LINE","label":"How can we help?","validation":"required","required":true},{"type":"SUBMIT","label":"Send"}],"cookieBannerEnabled":true,"notificationPreference":"EMAIL","formEmail":"","welcomeMessage":"Hi! Let us know how we can help and we’ll respond shortly.","formSuccessMessage":"Thanks for the message. We\'ll get back to you as soon as we can.","emailOptInEnabled":false,"emailOptInMessage":"Sign up to receive email updates, announcements, and more.","reamazePosition":"bottom-right","reamazeThemeColor":"#2c5d96","reamazePromptEnabled":true,"reamazePrompt":"Let me know if you have any questions!","reamazeConfirmationMessage":"Thanks! Your message has been submitted. We\'ll get back to you here or via email.","reamazeAvatarImage":"","reamazeDismissCarousel":false,"widgetId":"139cb21a-fb61-4021-893f-638d6f7f9db8","section":"default","category":"neutral","locale":"en-PH","env":"production","renderMode":"PUBLISH"}'),context:JSON.parse('{"widgetId":"139cb21a-fb61-4021-893f-638d6f7f9db8","widgetType":"MESSAGING","widgetPreset":"messaging1","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'),contextKey:"context-bs-2",radpack:"@widget/MESSAGING/bs-Component"}),window.wsb.CookieBannerScript=function(e){let{id:t,acceptCookie:a,dismissCookie:i}=e;const n=864e5;let o,s,r;function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const a=new Date;a.setTime(a.getTime()+n*t);const i=`expires=${a.toUTCString()}`;document.cookie=`${e}=true;${i};path=/`}function d(e){return document.cookie.includes(e)}function c(){s&&s.removeEventListener("click",m),r&&r.removeEventListener("click",u),o.style.display="none"}function m(e){e.preventDefault(),p(),l(i),l(a),c()}function u(e){var t;e.preventDefault(),l(i),d(a)&&(t=a,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),c()}function p(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}d(a)?p():d(i)||setTimeout((()=>{o=document.getElementById(`${t}-banner`),s=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),s&&s.addEventListener("click",m),r&&r.addEventListener("click",u),o.style.transform="translateY(-500px)"}),200)},window.wsb.CookieBannerScript(JSON.parse('{"id":"2f1e4025-9fcb-48d3-bc04-86fa084be1e1","dismissCookie":"cookie_warning_dismissed","acceptCookie":"cookie_terms_accepted"}')),document.getElementById("page-31220").addEventListener("click",(function(){}),!1);var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",(()=>{window.tti.calculateTTI((({name:e,value:t}={})=>{let a={wam_site_hasPopupWidget:!1,wam_site_hasMessagingWidget:!0,wam_site_headerTreatment:"Fill",wam_site_hasSlideshow:!1,wam_site_hasFreemiumBanner:!1,wam_site_homepageFirstWidgetType:"ABOUT",wam_site_homepageFirstWidgetPreset:"about2",wam_site_businessCategory:"watertreatmentequipmentservices",wam_site_theme:"layout18",wam_site_locale:"en-PH",wam_site_fontPack:"lato",wam_site_cookieBannerEnabled:!0,wam_site_membershipEnabled:!0,wam_site_hasHomepageHTML:!1,wam_site_hasHomepageShop:!1,wam_site_hasHomepageOla:!1,wam_site_hasHomepageBlog:!1,wam_site_hasShop:!1,wam_site_hasOla:!1,wam_site_planType:"business",wam_site_isHomepage:!0,wam_site_htmlWidget:!1};window.networkInfo&&window.networkInfo.downlink&&(a=Object.assign({},a,{wam_site_networkSpeed:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(a),window.tti._collectVitals({name:e,value:t})}))})),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);