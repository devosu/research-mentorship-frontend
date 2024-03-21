/*
 * Buckeye UX - version 0.10.0
 * Copyright (C) 2021 The Ohio State University
 */

!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});

"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0===s)return("string"===t?String:Number)(e);s=s.call(e,t||"default");if("object"!==_typeof(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}var disclosureNav=function(){function v(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=(_classCallCheck(this,v),this._keyCode={TAB:9,ENTER:13,ESC:27,SPACE:32,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40},this._defaultOptions={windowObj:window,domObj:document,hoverintent:hoverintent,ariaLabel:"",orientation:"horizontal",useHover:!0,useResponsiveMenu:!0,breakpointMinWidth:500,responsiveMenuButtonText:"Menu"},this._options=Object.assign(this._defaultOptions,t),this._orientationSwitched=!1,this._selector=e,this._navElem=this._options.domObj.querySelector(this._selector),0<this._options.ariaLabel.length&&this._navElem.setAttribute("aria-label",this._options.ariaLabel),this._navElem.classList.add("disclosure-nav"),this._options.orientation),s=("horizontal"===t?this._navElem.classList.add("disclosure-nav-orientation-horizontal"):"vertical"===t&&this._navElem.classList.add("disclosure-nav-orientation-vertical"),this._options.domObj.querySelectorAll("nav.disclosure-nav > ul > li > a, nav.disclosure-nav > ol > li > a")),n=0;n<s.length;n++)s[n].addEventListener("keydown",this.handleKeyDownTopLevelAElem.bind(this));for(var i=this._navElem.querySelectorAll("li > ul, li > ol"),o=0;o<i.length;o++){i[o].classList.add("disclosure-nav-submenu"),i[o].classList.add("disclosure-nav-submenu-closed");for(var a="disclosure-nav-sublist-".concat(o),l=(i[o].setAttribute("id",a),"NAV"===i[o].parentNode.parentNode.parentNode.nodeName),u=this._options.domObj.createElement("button"),a=(u.setAttribute("type","button"),u.setAttribute("aria-expanded","false"),u.setAttribute("aria-controls",a),u.classList.add("disclosure-nav-button"),l&&u.classList.add("disclosure-nav-top-level"),u.addEventListener("click",this.handleButtonClick.bind(this)),i[o].parentNode.insertBefore(u,i[o]),i[o].parentNode.querySelector("a, span")),r=(null!=a&&(l=a.innerHTML,"A"===a.nodeName?u.setAttribute("aria-label","More ".concat(l," pages")):"SPAN"===a.nodeName&&(u.innerHTML=l,u.classList.add("disclosure-nav-button-no-link"),a.remove()),a.classList.add("disclosure-nav-item-with-submenu")),u.addEventListener("keydown",this.handleKeyDownButton.bind(this)),i[o].children),d=0;d<r.length;d++)r[d].querySelector("li > a, li > span").addEventListener("keydown",this.handleKeyDownSubmenuItem.bind(this))}if(this._navElem.addEventListener("focusout",this.handleFocusoutNavElem.bind(this)),this._options.useHover){this._options.hoverintent?this._options.hoverintent(this._navElem,function(e){},this.handleMouseoutNavElem.bind(this)).options({timeout:900,interval:50}):this._navElem.addEventListener("mouseout",this.handleMouseoutNavElem.bind(this));for(var c=this._navElem.querySelectorAll("li"),h=0;h<c.length;h++)this._options.hoverintent?this._options.hoverintent(c[h],this.handleMouseoverNavItem.bind(this),function(e){}).options({timeout:500,interval:100}):c[h].addEventListener("mouseover",this.handleMouseoverNavItem.bind(this))}this._options.useResponsiveMenu&&(e=this._navElem.getAttribute("id"),this._menuToggle=this._options.domObj.createElement("button"),this._menuToggle.textContent=this._options.responsiveMenuButtonText,this._menuToggle.setAttribute("id","disclosure-nav-"+e+"-toggle"),this._menuToggle.setAttribute("aria-expanded","false"),this._menuToggle.setAttribute("aria-controls",e),this._menuToggle.classList.add("disclosure-nav-toggle"),(t=this._options.domObj.createElement("span")).setAttribute("aria-hidden","true"),this._menuToggle.appendChild(t),this._menuToggle.addEventListener("click",this.handleClickMenuToggle.bind(this)),this._options.windowObj.addEventListener("resize",this.handleWindowResize.bind(this)),this.resize())}return _createClass(v,[{key:"handleFocusoutNavElem",value:function(e){e.defaultPrevented||null!=(e=e.relatedTarget)&&this._navElem.contains(e)||this.isResponsiveMenu()||this.closeAllSubmenus()}},{key:"handleButtonClick",value:function(e){e.defaultPrevented||(e=e.target,e=this.getSubmenu(e),this.isResponsiveMenu()||this.closeSiblingSubmenus(e),this.toggleSubmenu(e))}},{key:"handleKeyDownButton",value:function(e){var t,s;e.defaultPrevented||(t=this.normalizeKey(e.key||e.keyCode),e=e.target,s=this.getSubmenu(e),t==this._keyCode.ESC&&(s.classList.contains("disclosure-nav-submenu-open")?this.toggleSubmenu(s):s.classList.contains("disclosure-nav-submenu-closed")&&(this.isTopLevelButton(e)?this.isTopLevelButton(e)&&this.isResponsiveMenu()&&(t=this._options.domObj.querySelector("#disclosure-nav-main-nav-toggle"),this.toggleResponsiveMenu(),t.focus()):(t=e.parentNode.parentNode.parentNode,s=this.getSubmenu(t),e=this.getButton(s),this.toggleSubmenu(s),e.focus()))))}},{key:"handleKeyDownTopLevelAElem",value:function(e){e.defaultPrevented||this.normalizeKey(e.key||e.keyCode)==this._keyCode.ESC&&this.isResponsiveMenu()&&(e=this._options.domObj.querySelector("#disclosure-nav-main-nav-toggle"),this.toggleResponsiveMenu(),e.focus())}},{key:"handleKeyDownSubmenuItem",value:function(e){var t;e.defaultPrevented||(t=this.normalizeKey(e.key||e.keyCode),e=e.target.parentNode.parentNode,t==this._keyCode.ESC&&null!==e&&(t=this.getButton(e),e.classList.contains("disclosure-nav-submenu-open"))&&(this.toggleSubmenu(e),t.focus()))}},{key:"handleMouseoutNavElem",value:function(e){e.defaultPrevented||this.isResponsiveMenu()||this.closeAllSubmenus()}},{key:"handleMouseoverNavItem",value:function(e){var t;e.defaultPrevented||(e=e.target,t=this.getSubmenu(e),this.isResponsiveMenu())||(this.closeSiblingSubmenus(e),null!=t&&this.openSubmenu(t))}},{key:"handleWindowResize",value:function(e){e.defaultPrevented||this.resize()}},{key:"handleClickMenuToggle",value:function(e){e.defaultPrevented||this.toggleResponsiveMenu()}},{key:"getButton",value:function(e){e=e.getAttribute("id");return this._options.domObj.querySelector("button[aria-controls="+e+"]")}},{key:"getSubmenu",value:function(e){var t=e.nodeName,s=null;return"A"==t||"SPAN"==t||"BUTTON"==t?s=e.parentNode.querySelector(".disclosure-nav-submenu"):"LI"==t&&(s=e.querySelector(".disclosure-nav-submenu")),s}},{key:"submenuIsOpen",value:function(e){return!!e.classList.contains("disclosure-nav-submenu-open")}},{key:"submenuIsClosed",value:function(e){return!!e.classList.contains("disclosure-nav-submenu-closed")}},{key:"toggleSubmenu",value:function(e){this.submenuIsOpen(e)?this.closeSubmenu(e):this.submenuIsClosed(e)&&this.openSubmenu(e)}},{key:"openSubmenu",value:function(e){var t=this.getButton(e);e.classList.add("disclosure-nav-submenu-open"),e.classList.remove("disclosure-nav-submenu-closed"),t.setAttribute("aria-expanded","true")}},{key:"closeSubmenu",value:function(e){var t=this.getButton(e);e.classList.add("disclosure-nav-submenu-closed"),e.classList.remove("disclosure-nav-submenu-open"),t.setAttribute("aria-expanded","false")}},{key:"isTopLevelButton",value:function(e){return e.classList.contains("disclosure-nav-top-level")}},{key:"closeAllSubmenus",value:function(){for(var e=this._navElem.querySelectorAll(".disclosure-nav-submenu-open"),t=0;t<e.length;t++)this.closeSubmenu(e[t])}},{key:"closeSiblingSubmenus",value:function(e){var t=e.nodeName,s=null,n=[],s="UL"==t&&e.classList.contains("disclosure-nav-submenu")?e:this.getSubmenu(e);"UL"==t||"A"==t||"SPAN"==t||"BUTTON"==t?n=e.parentNode.parentNode.querySelectorAll("li > ul"):"LI"==t&&(n=e.parentNode.querySelectorAll("li > ul"));for(var i=0;i<n.length;i++)n[i]!=s&&this.closeSubmenu(n[i])}},{key:"switchOrientation",value:function(){var e=this._navElem,t=this._options.orientation;"horizontal"===t?(this._options.orientation="vertical",e.classList.remove("disclosure-nav-orientation-horizontal"),e.classList.add("disclosure-nav-orientation-vertical")):"vertical"===t&&(this._options.orientation="horizontal",e.classList.remove("disclosure-nav-orientation-vertical"),e.classList.add("disclosure-nav-orientation-horizontal")),this._orientationSwitched=!this._orientationSwitched}},{key:"addMenuToggle",value:function(){null==this._options.domObj.getElementById(this._menuToggle.getAttribute("id"))&&(this._navElem.parentNode.insertBefore(this._menuToggle,this._navElem),this._navElem.classList.add("disclosure-nav-responsive"),this._navElem.classList.add("disclosure-nav-closed"),this._menuToggle.setAttribute("aria-expanded","false"))}},{key:"removeMenuToggle",value:function(){this._options.domObj.getElementById(this._menuToggle.getAttribute("id"))&&(this._navElem.parentNode.removeChild(this._menuToggle),this._navElem.classList.remove("disclosure-nav-responsive"),this._navElem.classList.remove("disclosure-nav-open"),this._navElem.classList.remove("disclosure-nav-closed"),this._menuToggle.setAttribute("aria-expanded","false"))}},{key:"isResponsiveMenu",value:function(){return this._navElem.classList.contains("disclosure-nav-responsive")}},{key:"toggleResponsiveMenu",value:function(){this._navElem.classList.contains("disclosure-nav-closed")?(this._navElem.classList.remove("disclosure-nav-closed"),this._navElem.classList.add("disclosure-nav-open"),this._menuToggle.setAttribute("aria-expanded","true")):this._navElem.classList.contains("disclosure-nav-open")&&(this._navElem.classList.remove("disclosure-nav-open"),this._navElem.classList.add("disclosure-nav-closed"),this._menuToggle.setAttribute("aria-expanded","false"),this.closeAllSubmenus())}},{key:"resize",value:function(){this._options.windowObj.innerWidth<=this._options.breakpointMinWidth?(this.addMenuToggle(),"horizontal"===this._options.orientation&&this.switchOrientation()):this.isResponsiveMenu()&&(this.removeMenuToggle(),this.closeAllSubmenus(),this._orientationSwitched)&&"vertical"===this._options.orientation&&this.switchOrientation()}},{key:"normalizeKey",value:function(e){var t=null;switch(e){case"Tab":case 9:t=this._keyCode.TAB;break;case"Enter":case 13:t=this._keyCode.ENTER;break;case"Escape":case"Esc":case 27:t=this._keyCode.ESC;break;case"Spacebar":case" ":case 32:t=this._keyCode.SPACE;break;case"End":case 35:t=this._keyCode.END;break;case"Home":case 36:t=this._keyCode.HOME;break;case"Left":case"ArrowLeft":case 37:t=this._keyCode.ARROW_LEFT;break;case"Up":case"ArrowUp":case 38:t=this._keyCode.ARROW_UP;break;case"Right":case"ArrowRight":case 39:t=this._keyCode.ARROW_RIGHT;break;case"Down":case"ArrowDown":case 40:t=this._keyCode.ARROW_DOWN}return t}}]),v}();

"use strict";

{
  var accordionClass = "bux-accordion";
  var accordions = document.querySelectorAll(".".concat(accordionClass));
  accordions = Array.prototype.slice.call(accordions);
  accordions.forEach(function (accordion) {
    var triggers = accordion.querySelectorAll(".".concat(accordionClass, "__trigger"));
    triggers = Array.prototype.slice.call(triggers);
    var panels = accordion.querySelectorAll(".".concat(accordionClass, "__panel"));
    panels = Array.prototype.slice.call(panels);
    triggers.forEach(function (trigger) {
      trigger.addEventListener("keydown", handleKeys);
      trigger.addEventListener("click", function (event) {
        var currentTrigger = event.currentTarget;

        if (!allowMultipleOpen(currentTrigger)) {
          closeAccordionItems(currentTrigger, triggers, panels);
        }

        toggleAccordionItem(currentTrigger);
      });
    });
  });

  function handleKeys(event) {
    var currentKey = event.key,
        currentTrigger = event.currentTarget,
        currentAccordion = event.currentTarget.parentNode.parentNode;
    var triggers = currentAccordion.querySelectorAll(".".concat(accordionClass, "__trigger"));
    triggers = Array.prototype.slice.call(triggers);
    var currentTriggerIndex = triggers.indexOf(currentTrigger);

    switch (currentKey) {
      case keys.up:
        if (currentTriggerIndex === 0) {
          triggers[triggers.length - 1].focus();
        } else {
          triggers[currentTriggerIndex - 1].focus();
        }

        event.preventDefault();
        break;

      case keys.down:
        if (currentTriggerIndex === triggers.length - 1) {
          triggers[0].focus();
        } else {
          triggers[currentTriggerIndex + 1].focus();
        }

        event.preventDefault();
        break;

      case keys.home:
        triggers[0].focus();
        event.preventDefault();
        break;

      case keys.end:
        triggers[triggers.length - 1].focus();
        event.preventDefault();
        break;
    }
  }

  function isHeading(element) {
    return element && element.classList.contains("".concat(accordionClass, "__heading"));
  }

  function toggleAccordionItem(element) {
    var currentTriggerExpanded = element.getAttribute("aria-expanded");
    currentTriggerExpanded = currentTriggerExpanded === "true" ? true : false;
    element.setAttribute("aria-expanded", !currentTriggerExpanded);
    var currentPanelId = element.getAttribute("aria-controls");
    var currentPanel = document.querySelector("#".concat(currentPanelId));
    var currentPanelHidden = currentPanel.getAttribute("hidden");

    if (currentPanelHidden !== null) {
      currentPanel.removeAttribute("hidden");
    } else {
      currentPanel.setAttribute("hidden", "hidden");
    }
  }

  function allowMultipleOpen(element) {
    var currentAccordion = element.parentNode.parentNode;
    var hasAllowMultiple = currentAccordion.dataset.allowMultiple;
    return hasAllowMultiple !== undefined ? true : false;
  }

  function closeAccordionItems(trigger, triggers, panels) {
    var otherTriggers = triggers.filter(function (element) {
      return element !== trigger;
    });
    otherTriggers.forEach(function (otherTrigger) {
      otherTrigger.setAttribute("aria-expanded", false);
    });
    var currentPanelId = trigger.getAttribute("aria-controls");
    var currentPanel = document.querySelector("#".concat(currentPanelId));
    var otherPanels = panels.filter(function (element) {
      return element !== currentPanel;
    });
    otherPanels.forEach(function (otherPanel) {
      otherPanel.setAttribute("hidden", "hidden");
    });
  }
}
"use strict";

var dismissButtons = document.querySelectorAll("button.bux-alert__dismiss");

if (dismissButtons) {
  dismissButtons.forEach(function (item) {
    item.addEventListener("click", dismissAlert);
  });
}

function dismissAlert(event) {
  var alert = event.target.closest(".bux-alert");
  alert.remove();
}
"use strict";

{
  var backToTopBtn = document.getElementById("bux-back-to-top");

  if (backToTopBtn) {
    var lastContentContainer = backToTopBtn.previousElementSibling;
    var lastPaddingBottom = window.getComputedStyle(backToTopBtn, null).getPropertyValue('padding-bottom');
    backToTopBtn.addEventListener("click", goToTop);

    window.onscroll = function () {
      scrollPage();
    };

    function scrollPage() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "flex";
        lastContentContainer.style.paddingBottom = "100px";
      } else {
        backToTopBtn.style.display = "none";
        lastContentContainer.style.paddingBottom = lastPaddingBottom;
      }
    }

    function goToTop() {
      var mainContainer = document.querySelector('main');
      var buxContainer = document.querySelectorAll('.bux-container');
      var focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

      if (mainContainer !== null) {
        mainContainer.focus({
          preventScroll: true
        });
      } else if (buxContainer.length > 0) {
        buxContainer[0].focus({
          preventScroll: true
        });
      } else {
        focusableElements[0].focus({
          preventScroll: true
        });
      }
    }
  }
}
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

{
  var BuckeyeAlert = /*#__PURE__*/function () {
    function BuckeyeAlert(settings) {
      _classCallCheck(this, BuckeyeAlert);

      this.settings = _objectSpread({
        url: "https://www.osu.edu/feeds/emergency-alert.rss",
        callback: function callback() {}
      }, settings);
      this.element = document.getElementById("bux-buckeye-alert");
      this.element.setAttribute("hidden", "");
    }

    _createClass(BuckeyeAlert, [{
      key: "initialize",
      value: function initialize() {
        var _this = this;

        fetch(this.getURL()).then(function (response) {
          return response.text();
        }).then(function (xmlString) {
          return new window.DOMParser().parseFromString(xmlString, "text/xml");
        }).then(function (data) {
          var alerts = data.querySelectorAll("item");

          if (alerts.length > 0) {
            _this.buildAlerts(alerts);

            _this.displayAlerts();

            _this.settings.callback();
          }
        }).catch(function (error) {
          console.error("Error fetching Buckeye Alerts:", error);
        });
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.element;
      }
    }, {
      key: "getURL",
      value: function getURL() {
        return this.settings.url;
      }
    }, {
      key: "buildAlerts",
      value: function buildAlerts(alerts) {
        var element = this.getElement();
        var container = document.createElement("div");
        var icon = document.createElement("div");
        var heading = document.createElement("h2");
        container.classList.add("bux-buckeye-alert-container");
        icon.classList.add("bux-buckeye-alert-container__icon");
        container.appendChild(icon);
        container.appendChild(heading);
        heading.innerText = "Buckeye Alert Emergency Message";
        alerts.forEach(function (alert) {
          var _alert$children = _slicedToArray(alert.children, 3),
              description = _alert$children[2];

          var message = description.textContent;
          container.innerHTML += message;
        });
        element.appendChild(container);
      }
    }, {
      key: "displayAlerts",
      value: function displayAlerts() {
        var element = this.getElement();
        element.removeAttribute("hidden");
      }
    }]);

    return BuckeyeAlert;
  }();
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Carousel = /*#__PURE__*/function () {
  function Carousel(carousel) {
    var _this = this;

    _classCallCheck(this, Carousel);

    this.carousel = carousel;
    this.leftButton = carousel.querySelector(".bux-card-carousel__nav--left");
    this.rightButton = carousel.querySelector(".bux-card-carousel__nav--right");
    this.container = carousel.querySelector(".bux-card-carousel__container");
    this.card = this.container.querySelector(".bux-card"); // Updates navigation buttons when a carousel is created

    this.updateNavigation(); // Event listeners to update navigation on scroll and window resize

    this.container.addEventListener("scroll", function () {
      _this.updateNavigation();
    });
    window.addEventListener("resize", function () {
      _this.updateNavigation();
    }); // Set up navigation button listeners for left and right buttons

    this.setupNavButtonListeners({
      button: this.leftButton,
      direction: -1
    });
    this.setupNavButtonListeners({
      button: this.rightButton,
      direction: 1
    });
  }

  _createClass(Carousel, [{
    key: "setupNavButtonListeners",
    value: function setupNavButtonListeners(_ref) {
      var _this2 = this;

      var button = _ref.button,
          direction = _ref.direction;

      // Scrolls carousel the carousel 1 card based on button clicked
      var navigate = function navigate() {
        var cardWidthIncludingMargins = _this2.card.offsetWidth + parseFloat(window.getComputedStyle(_this2.card).marginRight);

        _this2.container.scrollBy({
          top: 0,
          left: direction * cardWidthIncludingMargins,
          behavior: "smooth"
        });
      }; // Event listeners for activating navigation buttons


      button.addEventListener("mousedown", function (event) {
        event.preventDefault();
        navigate();
      });
      button.parentElement.addEventListener("click", function () {
        navigate();
      });
      button.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          navigate();
        }
      });
    } // Updates tab indices and button visibility

  }, {
    key: "updateNavigation",
    value: function updateNavigation() {
      this.updateTabIndices();
      this.updateButtonVisibility();
    } // Updates tab functionality based on card visibility in carousel

  }, {
    key: "updateTabIndices",
    value: function updateTabIndices() {
      var _this3 = this;

      var links = this.carousel.querySelectorAll(".bux-card__cta a");
      links.forEach(function (link) {
        var card = link.closest(".bux-card");
        var cardLeft = card.offsetLeft - _this3.container.scrollLeft;
        var cardRight = cardLeft + card.offsetWidth;
        var isLinkVisible = cardLeft >= 0 && cardRight <= _this3.container.offsetWidth;

        if (isLinkVisible) {
          link.removeAttribute("tabindex");
        } else {
          link.setAttribute("tabindex", "-1");
        }
      });
    } // Updates navigation button visibility based on scroll distance

  }, {
    key: "updateButtonVisibility",
    value: function updateButtonVisibility() {
      this.leftButton.style.display = this.container.scrollLeft > 0 ? "flex" : "none";
      this.rightButton.style.display = this.container.scrollWidth - this.container.scrollLeft - this.container.clientWidth > 1 ? "flex" : "none";
    }
  }]);

  return Carousel;
}(); // Initializes carousels after DOM is fully loaded


document.addEventListener("DOMContentLoaded", function () {
  var carousels = document.querySelectorAll(".bux-card-carousel");
  carousels.forEach(function (carouselElement) {
    return new Carousel(carouselElement);
  });
});
"use strict";

{
  // Fix role and keyboard barriers with cookies button
  var cookieSettingsLink = document.querySelectorAll('.ot-sdk-show-settings');
  Array.from(cookieSettingsLink).forEach(function (settingsLink) {
    settingsLink.tabIndex = 0;
    settingsLink.setAttribute('role', 'button');
    settingsLink.addEventListener('keyup', function (e) {
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        settingsLink.click();
      }
    });
  });
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SELECTORS = {
  progress: ".bux-multi-form__progress-filled",
  nextButton: ".bux-multi-form__next-button",
  backButton: ".bux-multi-form__back-button",
  stepIcons: ".bux-multi-form__step-icon",
  stepLabels: ".bux-multi-form__step-label",
  stepContainer: ".bux-multi-form__step-container",
  forms: ".bux-multi-form__form",
  iconCurrent: "bux-multi-form__step-icon--current",
  iconComplete: "bux-multi-form__step-icon--complete",
  horizontal: ".bux-multi-form__layout--horizontal",
  vertical: ".bux-multi-form__layout--vertical",
  container: ".bux-multi-form"
};
var DOMHelper = {
  getElement: function getElement(selector, container) {
    return container.querySelector(selector);
  },
  getElements: function getElements(selector, container) {
    return Array.from(container.querySelectorAll(selector));
  },
  addClass: function addClass(element, className) {
    if (element) element.classList.add(className);
  },
  removeClass: function removeClass(element, className) {
    if (element) element.classList.remove(className);
  }
};

var MultiStepForm = /*#__PURE__*/function () {
  function MultiStepForm(containerSelector) {
    _classCallCheck(this, MultiStepForm);

    this.container = DOMHelper.getElement(containerSelector, document);
    if (!this.container) return;
    this.initializeElements();
    this.initializeState();
    this.setInitialFormDisplay();
    this.bindButtonEvents();
  }

  _createClass(MultiStepForm, [{
    key: "initializeElements",
    value: function initializeElements() {
      this.progress = this.container.querySelector(SELECTORS.progress);
      this.nextButton = this.container.querySelector(SELECTORS.nextButton).querySelector("button");
      this.backButton = this.container.querySelector(SELECTORS.backButton).querySelector("button");
      this.stepIcons = DOMHelper.getElements(SELECTORS.stepIcons, this.container);
      this.stepLabels = DOMHelper.getElements(SELECTORS.stepLabels, this.container);
      this.forms = DOMHelper.getElements(SELECTORS.forms, this.container);
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      this.isVertical = DOMHelper.getElement(SELECTORS.vertical, this.container) !== null;
      this.currentStep = 0;
    }
  }, {
    key: "setInitialFormDisplay",
    value: function setInitialFormDisplay() {
      this.setFormsContainerMinHeight();
      this.backButton.style.display = "none";
    }
  }, {
    key: "bindButtonEvents",
    value: function bindButtonEvents() {
      var _this = this;

      this.nextButton.addEventListener("click", function (event) {
        return _this.handleButtonClick(1, event);
      });
      this.backButton.addEventListener("click", function (event) {
        return _this.handleButtonClick(-1, event);
      });
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(direction, event) {
      event.preventDefault();
      this.controlForm(direction);
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      var progressAmount = 100 / this.stepIcons.length * this.currentStep;

      if (this.isVertical) {
        this.progress.style.height = "".concat(progressAmount, "%");
      } else {
        this.progress.style.width = "".concat(progressAmount, "%");
      }
    }
  }, {
    key: "updateStepIcons",
    value: function updateStepIcons(direction) {
      DOMHelper.removeClass(this.stepIcons[this.currentStep], SELECTORS.iconCurrent);

      if (direction === 1) {
        DOMHelper.addClass(this.stepIcons[this.currentStep], SELECTORS.iconComplete);
      } else if (direction === -1) {
        DOMHelper.removeClass(this.stepIcons[this.currentStep + direction], SELECTORS.iconComplete);
      }

      DOMHelper.addClass(this.stepIcons[this.currentStep + direction], SELECTORS.iconCurrent);
    }
  }, {
    key: "updateStepForm",
    value: function updateStepForm(direction) {
      this.forms[this.currentStep].style.display = "none";
      this.forms[this.currentStep + direction].style.display = "block";
    }
  }, {
    key: "updateButtons",
    value: function updateButtons() {
      if (this.currentStep === 0) {
        this.backButton.style.display = "none";
      } else {
        this.backButton.style.display = "block";
        var backButtonLabel = this.getCurrentStepLabel(this.currentStep - 1);
        this.backButton.textContent = "Back: ".concat(backButtonLabel);
      }

      if (this.currentStep === this.stepIcons.length - 1) {
        this.nextButton.textContent = "Submit";
      } else {
        var nextButtonLabel = this.getCurrentStepLabel(this.currentStep + 1);
        this.nextButton.textContent = "Next: ".concat(nextButtonLabel);
      }
    }
  }, {
    key: "controlForm",
    value: function controlForm(direction) {
      if (direction === 1 && this.currentStep < this.stepIcons.length - 1 || direction === -1 && this.currentStep > 0) {
        this.updateStepIcons(direction);
        this.updateStepForm(direction);
        this.currentStep += direction;
        this.updateProgress();
        this.updateButtons();
      }
    }
  }, {
    key: "getCurrentStepLabel",
    value: function getCurrentStepLabel(index) {
      return this.stepLabels[index].textContent;
    }
  }, {
    key: "setFormsContainerMinHeight",
    value: function setFormsContainerMinHeight() {
      var _this2 = this;

      this.container.style.visibility = "hidden";
      var maxHeight = 0;
      this.forms.forEach(function (form) {
        form.style.display = "block";
        maxHeight = Math.max(maxHeight, _this2.container.offsetHeight);
        form.style.display = "none";
      });
      this.container.style.minHeight = "".concat(maxHeight, "px");
      this.forms[0].style.display = "block";
      this.container.style.visibility = "visible";

      if (this.isVertical) {
        this.stepContainer = DOMHelper.getElement(SELECTORS.stepContainer, this.container);
        this.stepContainer.style.minHeight = "".concat(maxHeight, "px");
      }
    }
  }]);

  return MultiStepForm;
}();

function initializeMultiStepForms() {
  var multiFormDivs = document.querySelectorAll(SELECTORS.container);
  multiFormDivs.forEach(function (formDiv) {
    var formId = formDiv.id;

    if (formId) {
      new MultiStepForm("#".concat(formId));
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeMultiStepForms);
"use strict";

function passwordToggle(inputFieldId, toggleButtonId) {
  var inputField = document.querySelector("#".concat(inputFieldId));
  inputField.type = inputField.type === "password" ? "text" : "password";
  var toggleButton = document.querySelector("#".concat(toggleButtonId));
  toggleButton.classList.toggle("bux-text-field__password-icon--hide");
  toggleButton.title = toggleButton.title === "Hide Password" ? "Show Password" : "Hide Password";
}

var passwordToggleButtons = document.querySelectorAll(".bux-text-field__password-icon");
passwordToggleButtons.forEach(function (toggleButton) {
  var randomId = toggleButton.id.split("-")[4];
  var inputFieldId = "bux-text-field__password-input-".concat(randomId);
  toggleButton.addEventListener("click", function () {
    return passwordToggle(inputFieldId, toggleButton.id);
  });
});
"use strict";

var heroes = Array.from(document.querySelectorAll(".bux-hero--carousel"));
heroes.forEach(function (hero) {
  var slides = Array.from(hero.querySelectorAll(".bux-hero--carousel .bux-hero__container"));
  var tabs = Array.from(hero.querySelectorAll(".bux-hero--carousel .bux-hero__tab"));
  var currentIndex = 0;
  var tablistNode = hero.querySelector('[role=tablist]');
  var nodes = hero.querySelectorAll('[role="tab"]');
  var liveRegionNode = hero.querySelector('.bux-hero__carousel-items');

  var showSlide = function showSlide(index) {
    slides[currentIndex].classList.remove("showing");
    tabs[currentIndex].classList.remove("bux-hero__tab--active");
    currentIndex = (index + slides.length) % slides.length;

    for (var i = 0; i < tabNodes.length; i++) {
      hideTabpanel(i);
    }

    tabs[currentIndex].removeAttribute('tabindex');
    slides[currentIndex].classList.add("showing");
    tabs[currentIndex].classList.add("bux-hero__tab--active");
    liveRegionNode.setAttribute("aria-live", "polite");
  };

  var showNextSlide = function showNextSlide() {
    return showSlide(currentIndex + 1);
  };

  var showPrevSlide = function showPrevSlide() {
    return showSlide(currentIndex - 1);
  };

  var handleTabClick = function handleTabClick(event) {
    var clickedTab = event.target;

    if (clickedTab.classList.contains("bux-hero__tab")) {
      var clickedTabIndex = tabs.indexOf(clickedTab);
      showSlide(clickedTabIndex);
    }
  };

  var nextButton = hero.querySelector(".bux-hero__button--right");
  var prevButton = hero.querySelector(".bux-hero__button--left");
  var image = hero.querySelector(".bux-hero--carousel .showing .bux-hero__image");
  var tabContainer = hero.querySelector(".bux-hero--carousel .bux-hero__tabs");
  var buttons = Array.from(hero.querySelectorAll(".bux-hero__button"));
  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);
  tabContainer.addEventListener("click", handleTabClick);
  buttons.forEach(function (button) {
    var buttonHeight = button.getBoundingClientRect().height;
    button.style.top = "".concat((image.getBoundingClientRect().height - buttonHeight) / 2, "px");
  }); // slide picker controls

  var tabNodes = [];
  var tabpanelNodes = [];

  var handleSlidepickerClick = function handleSlidepickerClick(event) {
    var index = tabNodes.indexOf(event.currentTarget);
    setSelectedTab(index, true);
  };

  var handleTabKeydown = function handleTabKeydown(event) {
    var flag = false;

    switch (event.key) {
      case 'ArrowRight':
        setSelectedToNextTab(true);
        flag = true;
        break;

      case 'ArrowLeft':
        setSelectedToPreviousTab(true);
        flag = true;
        break;

      case 'Home':
        setSelectedTab(0, true);
        flag = true;
        break;

      case 'End':
        setSelectedTab(tabNodes.length - 1, true);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  var setSelectedToNextTab = function setSelectedToNextTab(moveFocus) {
    var nextIndex = currentIndex + 1;

    if (nextIndex >= tabNodes.length) {
      nextIndex = 0;
    }

    setSelectedTab(nextIndex, moveFocus);
  };

  var setSelectedToPreviousTab = function setSelectedToPreviousTab(moveFocus) {
    var nextIndex = currentIndex - 1;

    if (nextIndex < 0) {
      nextIndex = tabNodes.length - 1;
    }

    setSelectedTab(nextIndex, moveFocus);
  };

  var setSelectedTab = function setSelectedTab(index, moveFocus) {
    if (index === currentIndex) {
      return;
    }

    currentIndex = index;

    for (var i = 0; i < tabNodes.length; i++) {
      hideTabpanel(i);
    }

    showTabpanel(index, moveFocus);
  };

  var showTabpanel = function showTabpanel(index, moveFocus) {
    var tabNode = tabNodes[index];
    var panelNode = tabpanelNodes[index];
    tabNode.setAttribute('aria-selected', 'true');
    tabNode.removeAttribute('tabindex');
    tabNode.classList.add('bux-hero__tab--active');

    if (panelNode) {
      panelNode.classList.add('showing');
    }

    if (moveFocus) {
      tabNode.focus();
    }
  };

  var hideTabpanel = function hideTabpanel(index) {
    var tabNode = tabNodes[index];
    var panelNode = tabpanelNodes[index];
    tabNode.setAttribute('aria-selected', 'false');
    tabNode.setAttribute('tabindex', '-1');
    tabNode.classList.remove('bux-hero__tab--active');

    if (panelNode) {
      panelNode.classList.remove('showing');
    }
  };

  var handleTabFocus = function handleTabFocus() {
    liveRegionNode.setAttribute('aria-live', 'polite');
  };

  tablistNode.addEventListener('focusin', handleTabFocus);

  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    tabNodes.push(n);
    n.addEventListener('keydown', handleTabKeydown);
    n.addEventListener('click', handleSlidepickerClick);
    var tabpanelNode = document.getElementById(n.getAttribute('aria-controls'));

    if (tabpanelNode) {
      tabpanelNodes.push(tabpanelNode);
    } else {
      tabpanelNodes.push(null);
    }

    if (i === 0) {
      n.removeAttribute("tabindex");
    }
  }
}); // video controls

var heroPauseButtons = Array.from(document.querySelectorAll(".bux-hero__video-button"));
heroPauseButtons.forEach(function (pauseButton) {
  var toggleVideo = function toggleVideo() {
    var buttonText = pauseButton.querySelector("span");
    var heroVideo = document.querySelector("video");

    if (heroVideo.paused) {
      heroVideo.play();
      buttonText.innerHTML = "Pause video";
      pauseButton.classList.remove('bux-hero__video-play');
    } else {
      heroVideo.pause();
      buttonText.innerHTML = "Play video";
      pauseButton.classList.add('bux-hero__video-play');
    }
  };

  pauseButton.addEventListener("click", toggleVideo);
});
"use strict";

window.addEventListener("load", function (event) {
  var options = {
    ariaLabel: "Main Navigation",
    breakpointMinWidth: 639
  }; // Check type of a11yNavbar since this will be compiled into bux.min.js.

  if (typeof disclosureNav != "undefined") {
    var menu = new disclosureNav("#bux-main-menu", options);

    function collisionDetection() {
      var menuButtonWidth = 150; //Approximation to allow for a buffer area.

      var menuStyles = window.getComputedStyle(menu._navElem.parentNode);
      var menuWidth = menu._navElem.parentNode.getBoundingClientRect().width - parseFloat(menuStyles.paddingLeft) - parseFloat(menuStyles.paddingRight) - menuButtonWidth;

      var menuItems = menu._navElem.querySelectorAll("li");

      var menuItemsTotalWidth = 0;

      for (var i = 0; i < menuItems.length; i++) {
        var menuItemsStyles = window.getComputedStyle(menuItems[i]);
        var menuItemMargins = parseFloat(menuItemsStyles.marginLeft) + parseFloat(menuItemsStyles.marginRight);
        var menuItemWidth = menuItems[i].getBoundingClientRect().width + menuItemMargins;
        menuItemsTotalWidth += menuItemWidth;
      }

      if (menuItemsTotalWidth >= menuWidth) {
        menu.addMenuToggle();

        if (menu._options.orientation === "horizontal") {
          menu.switchOrientation();
        }
      }
    }

    collisionDetection();
    window.addEventListener("resize", collisionDetection);
  }
}); //
// Search functionality
//

var mainMenuFirstLink = document.querySelector(".bux-menu-wrapper nav > ul > li > a");
var menuSearch = document.getElementsByClassName("bux-menu__search")[0];
var menuSearchInput = document.getElementsByClassName("bux-search__input")[0];
var menuSearchContainer = document.getElementsByClassName("bux-menu__search")[0];
var menuSearchSubmit = document.getElementsByClassName("bux-search__submit")[0];

if (menuSearch) {
  var menuSearchBtn = document.getElementById("menuSearchBtn");

  menuSearchBtn.onclick = function () {
    toggleSearch();
  };

  menuSearchInput.onkeydown = function (e) {
    if (menuSearchContainer.classList.contains("active")) {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        menuSearchBtn.focus();
      } else if (e.key === "Tab") {
        e.preventDefault();
        menuSearchSubmit.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        toggleSearch();
        menuSearchBtn.focus();
      }
    }
  };

  menuSearchBtn.onkeydown = function (e) {
    if (menuSearchContainer.classList.contains("active")) {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        menuSearchSubmit.focus();
      } else if (e.key === "Tab") {
        e.preventDefault();
        menuSearchInput.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        toggleSearch();
        menuSearchBtn.focus();
      }
    }
  };

  menuSearchSubmit.onkeydown = function (e) {
    if (menuSearchContainer.classList.contains("active")) {
      if (e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        menuSearchInput.focus();
      } else if (e.key === "Tab") {
        e.preventDefault();
        menuSearchBtn.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        toggleSearch();
        menuSearchBtn.focus();
      }
    }
  };

  document.addEventListener("click", function (event) {
    if (event.composedPath().includes(menuSearchInput) || event.composedPath().includes(menuSearchSubmit) || event.composedPath().includes(menuSearchBtn)) {// click inside
    } else {
      if (menuSearchContainer.classList.contains("active")) {
        toggleSearch();
      }
    }
  });
} // Small breakpoint search functionality


var menuButton = document.getElementById("main-menu-toggle");

if (menuButton) {
  menuButton.onclick = function () {
    toggleSearch();
  };
}

function toggleSearch() {
  var searchIcon = document.getElementById("searchIcon");
  menuSearchContainer.classList.toggle("active");
  menuSearchInput.classList.toggle("visually-hidden");
  menuSearchInput.getAttribute("tabindex") === "0" ? menuSearchInput.setAttribute("tabindex", "-1") : menuSearchInput.setAttribute("tabindex", "0");
  menuSearchSubmit.classList.toggle("visually-hidden");
  menuSearchSubmit.getAttribute("tabindex") === "0" ? menuSearchSubmit.setAttribute("tabindex", "-1") : menuSearchSubmit.setAttribute("tabindex", "0");
  menuSearch.focus();
  searchIcon.classList.toggle("icon-xmark");
  menuSearchContainer.classList.contains("active") ? mainMenuFirstLink.setAttribute("tabindex", "-1") : mainMenuFirstLink.setAttribute("tabindex", "0");
} // Mobile breakpoint for search


var breakpoint = 639;

function toggleMobileSearch() {
  if (menuSearchInput) {
    var windowWidth = window.innerWidth;
    var menuSearchInputIsHidden = menuSearchInput.classList.contains("visually-hidden");
    var menuSearchContainerIsActive = menuSearchContainer.classList.contains("active");
    var menuSearchInputIsShowing = !menuSearchInputIsHidden;
    var menuSearchContainerIsInactive = !menuSearchContainerIsActive;
    var menuIsMobile = document.querySelector("#disclosure-nav-bux-main-menu-toggle");

    if (windowWidth <= breakpoint) {
      menuSearchInput.classList.remove("visually-hidden");
      menuSearchSubmit.classList.remove("visually-hidden");
      menuSearchInput.setAttribute("tabindex", "0");
      menuSearchSubmit.setAttribute("tabindex", "0");
    } else if (windowWidth > breakpoint && menuIsMobile) {
      menuSearch.style.display = "none";
    } else if (windowWidth > breakpoint && !menuIsMobile) {
      menuSearch.style.display = "flex";
      menuSearchInput.classList.add("visually-hidden");
      menuSearchSubmit.classList.add("visually-hidden");
    } else if (windowWidth > breakpoint && menuSearchContainerIsInactive && menuSearchInputIsHidden) {
      return;
    } else if (windowWidth > breakpoint && menuSearchContainerIsActive && menuSearchInputIsHidden) {
      menuSearchInput.classList.remove("visually-hidden");
      menuSearchSubmit.classList.remove("visually-hidden");
      menuSearchInput.setAttribute("tabindex", "0");
      menuSearchSubmit.setAttribute("tabindex", "0");
    } else if (windowWidth > breakpoint && menuSearchContainerIsInactive && menuSearchInputIsShowing) {
      menuSearchInput.classList.add("visually-hidden");
      menuSearchSubmit.classList.add("visually-hidden");
      menuSearchInput.setAttribute("tabindex", "-1");
      menuSearchSubmit.setAttribute("tabindex", "-1");
    } else if (windowWidth > breakpoint && menuSearchContainerIsActive) {
      toggleSearch();
    } else {
      return;
    }
  }
}

window.onload = function () {
  var navMenu = document.querySelector(".bux-container--menu");
  var navButton = document.querySelector(".disclosure-nav-toggle");
  var menuLinks = document.querySelector("ul.bux-menu");
  var buxMainMenu = document.querySelector("#bux-main-menu");
  var smallBreakpoint = 640;
  var navLinks = navMenu.querySelectorAll(".bux-menu__item > a");
  navLinks = Array.prototype.slice.call(navLinks);

  function moveSearchToNav() {
    if (menuSearch) {
      buxMainMenu.insertBefore(menuSearch, menuLinks);
    }
  }

  function moveSearchBack() {
    if (menuSearch) {
      navMenu.insertBefore(menuSearch, buxMainMenu.nextSibling);
    }
  }

  function mobileEvents() {
    var isMobile = window.innerWidth < smallBreakpoint;

    if (isMobile) {
      moveSearchToNav();
      navButton.addEventListener("click", function () {
        if (navButton.getAttribute("aria-expanded") === "false") {
          navMenu.setAttribute("aria-modal", "false");
          document.querySelector(".bux-menu-wrapper").style.marginBottom = 0;
        } else {
          navMenu.setAttribute("aria-modal", "true");
          var menuHeight = document.querySelector("#bux-main-menu").clientHeight;
          document.querySelector(".bux-menu-wrapper").style.marginBottom = menuHeight + "px";
        }
      }); // Focus trap for mobile menu

      navMenu.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
          case 9:
            // Tab key
            // Move focus to navButton if on last nav item
            if (e.target === navLinks[navLinks.length - 1] && !e.shiftKey) {
              e.preventDefault();
              navButton.focus();
            }

            break;
        }
      });
    } else if (!isMobile) {
      moveSearchBack();
    }
  }

  mobileEvents();
  window.addEventListener("resize", function () {
    mobileEvents();
  });
};

window.addEventListener("load", toggleMobileSearch);
window.addEventListener("resize", toggleMobileSearch);
"use strict";

var osuNavs = Array.from(document.querySelectorAll(".bux-osu-nav"));

if (osuNavs) {
  osuNavs.forEach(function (osuNav) {
    var isMobile = false;
    var isOpen = false;
    var navButton = osuNav.querySelector("#osu-nav-trigger");
    var navLinks = osuNav.querySelectorAll(".bux-osu-nav__link > a");
    navLinks = Array.prototype.slice.call(navLinks);
    var navOverlay = osuNav.querySelector(".bux-osu-nav__overlay");
    var navMenu = osuNav.querySelector("#osu-navlinks-block"); // const osuNav = document.querySelector('#osu-navlinks');
    // Toggles menu open and closed

    navButton.addEventListener("click", function () {
      if (navButton.getAttribute("aria-expanded") === "false") {
        // open dropdown menu
        navButton.setAttribute("aria-expanded", "true");
        navOverlay.style.display = "block";
        isOpen = true;
        navMenu.setAttribute("aria-modal", "true");
        console.log(document.querySelector("#osu-navlinks").style.paddingTop);
        var menuLinksHeight = document.querySelector("#osu-navlinks").clientHeight - 55;
        osuNav.style.marginBottom = menuLinksHeight + "px";
      } else {
        closeMenu();
      }
    });
    navButton.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 13:
          // Enter key
          e.preventDefault();

          if (navButton.getAttribute("aria-expanded") === "false") {
            // open dropdown menu
            navButton.setAttribute("aria-expanded", "true");
            navOverlay.style.display = "block";
            isOpen = true;
            navMenu.setAttribute("aria-modal", "true");
            var menuLinksHeight = document.querySelector("#osu-navlinks").clientHeight - 55;
            osuNav.style.marginBottom = menuLinksHeight + "px";
          } else {
            closeMenu();
          }

          break;

        case 27:
          // Escape key
          closeMenu();
          break;

        case 9:
          // Tab key
          // If moving focus backwards, move focus to last nav item
          if (e.shiftKey && isOpen) {
            e.preventDefault();
            navLinks[navLinks.length - 1].focus();
          }

          break;
      }
    });
    osuNav.addEventListener("keydown", function (e) {
      if (isMobile) {
        switch (e.keyCode) {
          case 27:
            // Escape key
            closeMenu();
            break;

          case 9:
            // Tab key
            // Move focus to navButton if on last nav item
            if (e.target === navLinks[navLinks.length - 1] && !e.shiftKey) {
              e.preventDefault();
              navButton.focus();
            }

            break;
        }
      }
    });
    navOverlay.addEventListener("click", function () {
      closeMenu();
    });

    function closeMenu() {
      navButton.setAttribute("aria-expanded", "false");
      navOverlay.style.display = "none";
      navMenu.removeAttribute("aria-modal");
      isOpen = false; // Move focus back to navButton

      navButton.focus();
      osuNav.style.marginBottom = 0;
    }

    function resetAria() {
      if (!isMobile) {
        osuNav.removeAttribute("aria-labelledby");
      } else {
        osuNav.setAttribute("aria-labelledby", "osu-nav-trigger");
      }

      if (isOpen) {
        osuNav.removeAttribute("aria-modal");
      } else if (!isOpen) {
        osuNav.setAttribute("aria-modal");
      }
    }

    function handleResize() {
      var currentViewport = isMobile; // check if mobile viewport size

      if (window.getComputedStyle(document.querySelector("#osu-nav-trigger"), null).getPropertyValue("display") === "none") {
        isMobile = false;
      } else {
        isMobile = true;
      }

      if (currentViewport !== isMobile) {
        // viewport has changed between mobile and desktop widths
        resetAria();

        if (!isMobile) {
          closeMenu();
        }
      }
    }

    handleResize();
    window.addEventListener("resize", function () {
      handleResize();
    });
  });
}
"use strict";

{
  var quoteClass = 'bux-quote';

  if (document.querySelector(".".concat(quoteClass, "__image"))) {
    function setFigcaptionMargin() {
      var quoteWrapper = document.querySelector(".".concat(quoteClass));
      var quoteFigcaption = document.querySelector('figcaption');
      var quoteBlockquote = document.querySelector('blockquote');
      var quoteImage = document.querySelector(".".concat(quoteClass, "__image"));
      var quoteImageRightMargin = 24;

      if (window.getComputedStyle(quoteImage).getPropertyValue('margin-right') === quoteImageRightMargin + 'px') {
        quoteWrapper.style.minHeight = quoteImage.offsetHeight + 'px';
        quoteFigcaption.style.marginLeft = quoteImage.offsetWidth + quoteImageRightMargin + 'px';
        quoteBlockquote.style.marginLeft = quoteImage.offsetWidth + quoteImageRightMargin + 'px';
      } else {
        quoteWrapper.style.minHeight = 'none';
        quoteFigcaption.style.marginLeft = 0;
        quoteBlockquote.style.marginLeft = 0;
      }
    }

    setFigcaptionMargin();

    window.onresize = function () {
      setFigcaptionMargin();
    };
  }
}
"use strict";

window.addEventListener("load", function (event) {
  var options = {
    'ariaLabel': 'Sidebar Navigation',
    'orientation': 'vertical',
    'useHover': false,
    'useResponsiveMenu': false
  }; // Check type of disclosureNav since this will be compiled into bux.min.js.

  if (typeof disclosureNav != "undefined") {
    var sidebarNav = new disclosureNav('#sidebar-nav', options);
  }
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sortTable(table, column) {
  var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var dirModifier = asc ? 1 : -1;
  var tBody = table.tBodies[0];
  var rows = Array.from(tBody.querySelectorAll("tr")); // Sort each row

  var sortedRows = rows.sort(function (a, b) {
    var aColText = a.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
    var bColText = b.querySelector("td:nth-child(".concat(column + 1, ")")).textContent.trim();
    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  }); // Remove all existing TRs

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  } // Add sorted TRs


  tBody.append.apply(tBody, _toConsumableArray(sortedRows)); // Record sort direction

  table.querySelectorAll("th").forEach(function (th) {
    return th.classList.remove("th-sort-asc", "th-sort-desc");
  });
  table.querySelector("th:nth-child(".concat(column + 1, ")")).classList.toggle("th-sort-asc", asc);
  table.querySelector("th:nth-child(".concat(column + 1, ")")).classList.toggle("th-sort-desc", !asc); // Add/Move aria-sort attribute to sorted column

  table.querySelectorAll("th").forEach(function (th) {
    return th.removeAttribute("aria-sort");
  });
  var ariaSort = asc ? "ascending" : "descending";
  table.querySelector("th:nth-child(".concat(column + 1, ")")).setAttribute("aria-sort", ariaSort); // Modify aria-pressed values on buttons

  table.querySelectorAll("th button").forEach(function (button) {
    return button.setAttribute("aria-pressed", "false");
  });
  table.querySelector("th:nth-child(".concat(column + 1, ") button")).setAttribute("aria-pressed", "true"); // Update aria-live region

  var caption = table.querySelector("caption").textContent;
  var columnName = table.querySelector("th:nth-child(".concat(column + 1, ") button")).textContent;
  var announcement = "".concat(columnName, " is now sorted in ").concat(ariaSort, " order.");
  table.parentElement.querySelector(".bux-table--announcement-region").textContent = announcement;
} // Query for tables with Sortable property and add Click event


document.querySelectorAll(".bux-table--sortable th button").forEach(function (button) {
  button.addEventListener("click", function () {
    var headerCell = button.parentElement;
    var tableElement = headerCell.parentElement.parentElement.parentElement;
    var headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    var currentIsAscending = headerCell.classList.contains("th-sort-asc");
    sortTable(tableElement, headerIndex, !currentIsAscending);
  });
});
"use strict";

{
  var tabpanelClass = "bux-tabpanel";

  if (document.querySelector(".".concat(tabpanelClass))) {
    var tabpanels = document.querySelectorAll(".".concat(tabpanelClass));
    tabpanels = Array.prototype.slice.call(tabpanels);
    tabpanels.forEach(function (tabpanel) {
      var tabs = tabpanel.querySelectorAll(".".concat(tabpanelClass, "__tab"));
      tabs = Array.prototype.slice.call(tabs);
      var panels = tabpanel.querySelectorAll(".".concat(tabpanelClass, "__panel"));
      panels = Array.prototype.slice.call(panels);
      tabs.forEach(function (tab) {
        tab.addEventListener("keydown", handleKeys);
        tab.addEventListener("click", function (event) {
          var currentTab = event.currentTarget;
          var otherTabs = tabs.filter(function (element) {
            return element !== currentTab;
          });
          currentTab.removeAttribute("tabindex");
          currentTab.setAttribute("aria-selected", true);
          otherTabs.forEach(function (otherTab) {
            otherTab.setAttribute("tabindex", "-1");
            otherTab.setAttribute("aria-selected", false);
          });
          var currentPanelId = currentTab.getAttribute("aria-controls");
          var currentPanel = document.querySelector("#".concat(currentPanelId));
          var otherPanels = panels.filter(function (element) {
            return element !== currentPanel;
          });
          currentPanel.removeAttribute("hidden");
          otherPanels.forEach(function (otherPanel) {
            otherPanel.setAttribute("hidden", "hidden");
          });
        });
      });
    });

    function handleKeys(event) {
      var currentKey = event.key,
          currentTab = event.currentTarget;
      var _currentTab$parentNod = currentTab.parentNode,
          tabs = _currentTab$parentNod.parentNode.children,
          previousElementChild = _currentTab$parentNod.previousElementSibling,
          nextElementChild = _currentTab$parentNod.nextElementSibling;

      var _ref = previousElementChild || {},
          previousElement = _ref.firstElementChild;

      var _ref2 = nextElementChild || {},
          nextElement = _ref2.firstElementChild;

      var firstTab = tabs[0].querySelector("button");
      var lastTab = tabs[tabs.length - 1].querySelector("button");

      switch (currentKey) {
        case keys.left:
          if (!isTab(previousElement)) {
            activateTab(lastTab);
          } else {
            activateTab(previousElement);
          }

          event.preventDefault();
          break;

        case keys.right:
          if (!isTab(nextElement)) {
            activateTab(firstTab);
          } else {
            activateTab(nextElement);
          }

          event.preventDefault();
          break;

        case keys.home:
          activateTab(firstTab);
          event.preventDefault();
          break;

        case keys.end:
          activateTab(lastTab);
          event.preventDefault();
          break;
      }
    }

    function isTab(element) {
      return element && element.classList.contains("".concat(tabpanelClass, "__tab"));
    }

    function activateTab(element) {
      element.focus();
      element.click();
    }
  }
}
"use strict";

var keys = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  home: 'Home',
  end: 'End',
  control: 'Control',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  tab: 'Tab',
  space: 'Space',
  enter: 'Enter'
};

function debounce(func) {
  var _this = this;

  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, timeout);
  };
}
//# sourceMappingURL=bux.js.map
