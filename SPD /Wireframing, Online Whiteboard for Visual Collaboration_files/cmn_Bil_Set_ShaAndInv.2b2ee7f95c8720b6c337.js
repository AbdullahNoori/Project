(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1447:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"e",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return h});var o=n(21),i=n(33),s=n(32),r=n(134),c=n(110),a=10;function p(e,t){var n=t-Object(i.O)(e);return n<=0?0:Math.ceil(n/a)*a}function l(e,t){return s.a.organizations.selectById(e).set({fullUsersLimit:t})}function d(e,t,n,o,i,s){var r,c=function(e,t,n,o){var i=[];return 1===e?i.push("To invite <strong>"+o+"</strong> as Full Member you need to allocate a Full License. "):i.push(e+" users you are inviting are not yet Full Members of your "+n+" Plan account. \n\t\t\tTo invite them as Full Members you need to allocate "+e+" Full Licenses. "),t>0?i.push("Only "+t+" license"+(1===t?" is":"s are")+" vacant on you "+n+" Plan subscription. "):i.push("There are no Full licenses vacant on you "+n+" Plan subscription. "),i.join("")}(n,o,i,t),a='Click "Invite anyway" to increase your subscription by '+(r=s)+" extra license"+(1===r?"":"s")+" right now. An Account Executive will get in touch with you to sort out the prorated payment according to your subscription terms.";e.text=c+' <div class="rtb-modal-body__row"><strong>'+a+"</strong></div>",e.submitButton={caption:"Invite anyway"},e.cancelButton={caption:"Cancel"}}function u(e){return Object(i.Q)(e,r.a.SEMI_AUTOMATED_COMPANY_EXPANSION)}function h(e){return Object(o.b)(this,void 0,Promise,function(){return Object(o.e)(this,function(t){switch(t.label){case 0:c.c(),t.label=1;case 1:return t.trys.push([1,,3,4]),[4,e()];case 2:return[2,t.sent()];case 3:return c.a(),[7];case 4:return[2]}})})}},1584:function(e,t,n){"use strict";var o=n(21),i=n(43),s=n(58),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.d)(t,e),t.prototype.onSelect=function(){this.props.onSelect&&this.props.onSelect(this.props.option)},t.prototype.renderDivider=function(){return this.props.option.divider?i.React.createElement("div",{className:"rtb-select__divider"}):null},t.prototype.render=function(){var e=this.props,t=e.option,n=e.isFocused;return i.React.createElement("div",null,i.React.createElement(i.Tappable.NoDom,{hmTap:this.onSelect},i.React.createElement("button",{className:Object(i.classNames)("rtb-select__option",{"rtb-select__option--focused":!!n}),key:t.value,ref:this.props.refElement},t.element||t.key)),this.renderDivider())},Object(o.c)([i.decorators.autobind],t.prototype,"onSelect",null),t}(i.React.PureComponent),c=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={selectedIndex:t.getSelectedIndex(n.props)},n}return Object(o.d)(t,e),t.getSelectedIndex=function(e){var t=e.selectedOption;return t?e.options.indexOf(t):-1},t.prototype.componentWillReceiveProps=function(e,n){this.props.selectedOption!==e.selectedOption&&this.setState({selectedIndex:t.getSelectedIndex(e)})},t.prototype.addOrRemoveListener=function(e){e?window.addEventListener("keydown",this.onKeyDown):window.removeEventListener("keydown",this.onKeyDown)},t.prototype.setSelectedOption=function(e){e&&(this.setState({selectedIndex:t.getSelectedIndex(this.props)}),this.onSelectOption(e))},t.prototype.onKeyDown=function(e){switch(e.keyCode){case s.a.DOWN_ARROW:this.state.selectedIndex<this.props.options.length-1&&this.setState({selectedIndex:this.state.selectedIndex+1});break;case s.a.UP_ARROW:this.state.selectedIndex>0&&this.setState({selectedIndex:this.state.selectedIndex-1});break;case s.a.ENTER:this.setSelectedOption(this.props.options[this.state.selectedIndex]),e.preventDefault()}this.props.onKeyDown&&this.props.onKeyDown(e)},t.prototype.onSelectOption=function(e){this.props.onChange&&this.props.onChange(e)},t.prototype.isFocused=function(e){return this.state.selectedIndex===this.props.options.indexOf(e)},t.prototype.scrollToOption=function(e){e&&e.scrollIntoView({block:"center"})},t.prototype.render=function(){var e=this,t=this.props.options.map(function(t,n){var o=e.isFocused(t);return i.React.createElement(r,{key:n,option:t,isFocused:o,onSelect:e.setSelectedOption,refElement:o&&e.scrollToOption||null})});return i.React.createElement("div",{className:"rtb-select__options",ref:this.addOrRemoveListener},t)},Object(o.c)([i.decorators.autobind],t.prototype,"addOrRemoveListener",null),Object(o.c)([i.decorators.autobind],t.prototype,"setSelectedOption",null),Object(o.c)([i.decorators.autobind],t.prototype,"onKeyDown",null),t}(i.React.PureComponent);t.a=c},4024:function(e,t){e.exports='<div class="ui-directive ui-input" ng-style="{width: width}" ng-class="{\'ui-directive--done\': done, \'ui-directive--fail\': failState}">\n    <div class="ui-input__label-wrapper" ng-show="label">\n        <label ng-attr-for="ui-input-{{::id}}">{{label}}</label>\n    </div>\n    <div class="ui-input__input-wrapper">\n        <input class="ui-directive__border"\n               ng-class="{\'readonly\': readonly}"\n               ng-disabled="!editable"\n               ng-readonly="readonly"\n               ng-attr-id="ui-input-{{::id}}"\n               ng-attr-type="{{type || \'text\'}}"\n               ng-attr-placeholder="{{placeholder || \'\'}}"\n               ng-attr-maxlength="{{maxlength}}"\n               ng-model="value"\n               ng-keyup="_onKeyUp($event)"\n               ng-change="_onChange()"\n               ng-blur="onBlur({$event: $event})"\n               ng-focus="_onFocus($event)"\n               ng-style="{\'height\': height, \'line-height\': height + \'px\'}">\n\n        <div class="ui-input__eye" ng-show="typeOnInit == \'password\'" ng-class="{\'ui-input__eye--open\': eye}" hm-tap="toggleEye()">\n            <icon class="ui-input__eye-open" icon-name="\'general--password-eye-open\'"></icon>\n            <icon class="ui-input__eye-close" icon-name="\'general--password-eye-close\'"></icon>\n        </div>\n\n        <div class="ui-directive__done">{{\'account.commons.directive.ui.done.saved\' | translate}}</div>\n        <div class="ui-directive__fail ui-directive__fail--{{direction || \'top\'}}" ng-show="failMessage">\n            <div class="ui-directive__fail-triangle"></div>\n            <div class="ui-directive__fail-wrapper">\n                <icon class="ui-directive__fail-icon" icon-name="\'general--directive-fail\'"></icon>\n                <div class="ui-directive__fail-message" ng-bind-html="failMessage"></div>\n            </div>\n        </div>\n    </div>\n</div>'},534:function(e,t,n){"use strict";var o;!function(e){e[e.SHARE=0]="SHARE",e[e.DASHBOARD=1]="DASHBOARD",e[e.SETTINGS=2]="SETTINGS"}(o||(o={})),t.a=o},754:function(e,t,n){"use strict";(function(e,o,i){n.d(t,"a",function(){return d});var s=n(86),r=n.n(s),c=n(58),a=n(135),p=n(755),l=n(25);function d(){Object(l.b)().directive("uiInputOld",u)}function u(){return{replace:!0,restrict:"E",template:n(4024),controller:p.a,scope:{value:"=",editable:"=?",readonly:"=?",done:"=?",failState:"=?",failMessage:"=?",type:"=?",width:"=?",height:"=?",label:"=?",maxlength:"=?",placeholder:"=?",direction:"=?",onEdited:"&",onChange:"&",onBlur:"&",onFocus:"&",onKeyUp:"&"},link:function(t,n){var s=n.find("input");if(t.eye=!1,t.id=a.b(),t.typeOnInit=r()(t.type),t.editable=!!e.isUndefined(t.editable)||t.editable,t.toggleEye=function(){t.eye=!t.eye,t.type=t.eye?"text":"password"},t._onKeyUp=function(e){e.keyCode==c.a.ENTER&&(t.onEdited(),s.trigger("blur")),t.onKeyUp&&t.onKeyUp({$event:e})},o.isTouchSupportedAndNotDesktop){var p=i("html");s.on("focus",function(){return p.addClass("--focused")}),s.on("blur",function(){return p.removeClass("--focused")}),t.$on("$destroy",function(){p.removeClass("--focused"),o.ios&&s.trigger("blur")})}}}}}).call(this,n(186),n(0),n(36))},755:function(e,t,n){"use strict";var o=function(){function e(e){e._onFocus=function(t){e.failState=!1,e.onFocus&&e.onFocus({$event:t})},e._onChange=function(){e.failState=!1,e.onChange()},e.$watch("done",function(t){t&&setTimeout(function(){e.done=!1,e.$digest()},2e3)})}return e.$inject=["$scope"],e}();t.a=o},823:function(e,t,n){"use strict";(function(e){var o=n(21),i=n(43),s=e.isTouchSupportedAndNotDesktop?"touchstart":"click",r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.d)(t,e),t.prototype.shouldComponentUpdate=function(e){if(this.props.onTapOut!==e.onTapOut)throw new Error("Change handlers on the fly is not supported!");return this.props.children!==e.children},t.prototype.attachListeners=function(){window.addEventListener(s,this.onClick,!0)},t.prototype.detachListeners=function(){window.removeEventListener(s,this.onClick,!0)},t.prototype.onClick=function(e){var t=this.props.onTapOut;this.element&&e.target&&!this.element.contains(e.target)&&t(e)},t.prototype.onElementRef=function(e){e||this.detachListeners(),this.element=e,e&&this.attachListeners();var t=i.React.Children.only(this.props.children),n=t&&t.ref;"function"===typeof n&&n(e)},t.prototype.render=function(){return i.React.cloneElement(i.React.Children.only(this.props.children),{ref:this.onElementRef})},Object(o.c)([i.decorators.autobind],t.prototype,"onClick",null),Object(o.c)([i.decorators.autobind],t.prototype,"onElementRef",null),t}(i.React.Component);t.a=r}).call(this,n(0))},931:function(e,t,n){"use strict";var o=n(21),i=n(43),s=(n(1140),n(965)),r=n(1584),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpened:!1},t}return Object(o.d)(t,e),t.prototype.onOpened=function(){this.setState({isOpened:!0})},t.prototype.onClosed=function(){this.setState({isOpened:!1})},t.prototype.onSelectOption=function(e){this.onClosed(),this.props.onChange&&this.props.onChange(e)},t.prototype.render=function(){var e=this.props.text||(this.props.selectedOption?this.props.selectedOption.key:this.props.defaultText||"Choose");return i.React.createElement(s.a,{text:e,className:this.props.className,isOpened:this.state.isOpened,onOpened:this.onOpened,onClosed:this.onClosed},i.React.createElement(r.a,{options:this.props.options,selectedOption:this.props.selectedOption,onChange:this.onSelectOption}))},Object(o.c)([i.decorators.autobind],t.prototype,"onOpened",null),Object(o.c)([i.decorators.autobind],t.prototype,"onClosed",null),Object(o.c)([i.decorators.autobind],t.prototype,"onSelectOption",null),t}(i.React.PureComponent);t.a=c},965:function(e,t,n){"use strict";var o=n(21),i=n(43),s=n(811),r=n(245),c=n(1132),a={flip:{enabled:!0,behavior:["bottom","top","bottom"],boundariesElement:"viewport"},preventOverflow:{enabled:!0,escapeWithReference:!0,boundariesElement:"viewport",padding:20}},p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.d)(t,e),t.prototype.render=function(){return i.React.createElement(c.a,Object(o.a)({},this.props,{placement:this.props.placement||"bottom",modifiers:a}))},t}(i.React.PureComponent),l=n(823),d=n(58),u=function(e){function t(t){var n=e.call(this,t)||this;return n.refElement=i.React.createRef(),n.state={isOpened:!!t.isOpened},n}return Object(o.d)(t,e),t.prototype.toggleIsOpened=function(){this.state.isOpened?this.onClosed():this.onOpened()},t.prototype.onOpened=function(){this.props.onOpened&&this.props.onOpened(),this.setState({isOpened:!0})},t.prototype.onClosed=function(){this.props.onClosed&&this.props.onClosed(),this.setState({isOpened:!1})},t.prototype.clickOut=function(e){var t=e.target;this.refElement.current&&t&&!this.refElement.current.contains(t)&&this.onClosed()},t.prototype.onKeyDown=function(e){e.keyCode!==d.a.ESCAPE&&e.keyCode!==d.a.TAB||this.onClosed()},t.prototype.addOrRemoveListener=function(e){e?window.addEventListener("keydown",this.onKeyDown):window.removeEventListener("keydown",this.onKeyDown)},t.prototype.componentDidUpdate=function(e,t,n){t.isOpened!==this.props.isOpened&&this.setState({isOpened:!!this.props.isOpened})},t.prototype.render=function(){var e=this.props,t=e.text,n=e.className,o=e.children;return i.React.createElement("div",{className:Object(i.classNames)("rtb-select",n),ref:this.refElement},i.React.createElement(s.a,{isOpen:this.state.isOpened,timeout:70},i.React.createElement(r.a.Anchor.button,{className:"rtb-select__button",hmTap:this.toggleIsOpened},i.React.createElement("span",{className:"rtb-select__button-text"},t)),i.React.createElement(p,{placement:"bottom-start",className:"rtb-select__popup"},i.React.createElement(l.a,{onTapOut:this.clickOut},i.React.createElement("div",{className:"rtb-select__options-wrapper rtb-select__options-wrapper--popper",ref:this.addOrRemoveListener},o)))))},Object(o.c)([i.decorators.autobind],t.prototype,"toggleIsOpened",null),Object(o.c)([i.decorators.autobind],t.prototype,"clickOut",null),Object(o.c)([i.decorators.autobind],t.prototype,"onKeyDown",null),Object(o.c)([i.decorators.autobind],t.prototype,"addOrRemoveListener",null),t}(i.React.PureComponent);t.a=u}}]);
//# sourceMappingURL=cmn~Bil~Set~ShaAndInv.2b2ee7f95c8720b6c337.js.map