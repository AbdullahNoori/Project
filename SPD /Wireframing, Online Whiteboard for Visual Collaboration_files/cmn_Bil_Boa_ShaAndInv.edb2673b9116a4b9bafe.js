(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{267:function(n,e,t){"use strict";var a;t.d(e,"a",function(){return a}),function(n){n.A="A",n.B="B",n.C="C",n.D="D"}(a||(a={}))},3320:function(n,e,t){(n.exports=t(23)(!1)).push([n.i,".base-headed-modal .md-content {\n  width: 440px;\n}\n.base-headed-modal .modal-caption {\n  font-size: 20px;\n}\n.base-headed-modal .modal-close {\n  float: right;\n  width: 44px;\n  margin-top: -7px;\n  font-size: 32px;\n  text-align: center;\n}\n.base-headed-modal .modal-content {\n  padding: 30px 30px 40px 30px;\n}\n.base-headed-modal .modal-content .modal-label {\n  font-size: 13px;\n  margin: -3px 0 5px 0;\n}\n.base-headed-modal .modal-content .modal-input_full {\n  width: 100%;\n  height: 40px;\n}\n.base-headed-modal .modal-content .modal-icon_left {\n  display: block;\n  float: left;\n  max-width: 48px;\n}\n.base-headed-modal .modal-content .modal-text {\n  margin-left: 77px;\n  min-height: 48px;\n}\n.base-headed-modal .modal-content .modal-message_error {\n  margin: 10px 0 -15px 0;\n  color: #d34139;\n}\n.base-headed-modal .modal-content .modal-buttons_shift {\n  margin-top: 34px;\n  margin-left: 77px;\n}\n.base-headed-modal .modal-content .modal-buttons_40 {\n  margin-top: 40px;\n}\n.base-headed-modal .modal-content .modal-button_cancel {\n  display: inline-block;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 20px;\n  color: #4262ff;\n}\n.base-headed-modal .modal-content .link {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.base-headed-modal .modalContent-brokenBoardIcon .modal-icon_left {\n  max-width: 40px;\n}\n.base-headed-modal .blue-lock-icon .modal-icon_left {\n  max-width: 32px;\n  margin-left: 8px;\n}\n.base-headed-modal .modal-text__learn-more {\n  margin-top: 15px;\n  margin-left: 77px;\n}\n.base-headed-modal.medium-modal .md-content {\n  width: 500px;\n}\n.base-headed-modal.big-modal .md-content {\n  width: 600px;\n}\n.base-headed-modal.fullscreen-modal .md-content {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.base-headed-modal__red {\n  font-size: 14px;\n}\n.base-headed-modal__red .modal-content .modal-icon_left {\n  max-width: 32px;\n  margin-left: 8px;\n}\n.base-headed-modal__red .modal-text--red {\n  color: #cc6666;\n  margin-left: 77px;\n  margin-top: -5px;\n}\n.base-headed-modal__red .modal-text__red-list {\n  color: #cc6666;\n  margin-left: 77px;\n}\n.base-headed-modal__red .modal-text__red-list__item {\n  font-weight: bold;\n  margin-top: 9px;\n}\n.base-headed-modal__red .modal-text__red-list__item::before {\n  content: '\\2013';\n  display: inline-block;\n  margin-right: 4px;\n}\n.base-headed-modal__red .modal-text__red-list__item--link {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.base-headed-modal__red .modal-text {\n  margin-top: 32px;\n}\n.base-headed-modal__red .modal-content .modal-buttons_shift {\n  margin-top: 20px;\n}\n.base-headed-modal__red .btn-green {\n  padding: 0 30px;\n}\n.base-headed-modal .modal-text__learn-more,\n.base-headed-modal__red .modal-text__learn-more {\n  margin-top: 15px;\n  margin-left: 77px;\n}\n.base-headed-modal .modal-content__note {\n  margin-top: 15px;\n  margin-left: 77px;\n  font-size: 12px;\n  color: #827f9b;\n}\n.base-headed-modal--wide.md-content {\n  width: 520px;\n}\n",""])},3540:function(n,e){n.exports='<div class="md-container base-headed-modal">\n    <div class="md-content" ng-class="modal.params.customClass">\n        <rtb-modal-header color="{{modal.headerColorClass}}"\n                          text="{{ modal.params.caption }}"\n                          close-button-visible="!modal.params.hideCloseButton"\n                          on-close="modal.cancel()"></rtb-modal-header>\n        <div class="modal-content">\n            <img class="modal-icon_left" ng-style="{margin:modal.params.iconMargin}" ng-src="{{modal.iconURL}}">\n\n            <div class="modal-text--red"\n                 clickable-text="modal.onRedTextClicked($clickedElementName)"\n                 ng-bind-html="modal.redText"></div>\n\n            <div class="modal-text__red-list" ng-show="modal.redItems.length > 0">\n                <div class="modal-text__red-list__item"\n                     ng-class="{\'modal-text__red-list__item--link\': item.action}"\n                     ng-repeat="item in modal.redItems"\n                     ng-bind="item.text"\n                     hm-tap="item.action()"></div>\n            </div>\n\n            <div class="modal-text"\n                 clickable-text="modal.onTextClicked($clickedElementName)"\n                 ng-bind-html="modal.text"></div>\n            <div class="modal-buttons_shift" ng-show="modal.buttonsVisible && !modal.params.showNewStyleForButtons">\n                <div class="btn btn-inline"\n                     ng-class="modal.submitButtonClass"\n                     ng-bind="modal.params.submitButtonCaption"\n                     hm-tap="modal.submit()"></div>\n                <div class="btn btn-inline"\n                     ng-class="modal.cancelButtonClass"\n                     ng-bind="modal.params.cancelButtonCaption"\n                     ng-show="modal.params.cancelButtonCaption"\n                     hm-tap="modal.cancel()"></div>\n            </div>\n            <div class="modal-buttons_shift" ng-show="modal.buttonsVisible && modal.params.showNewStyleForButtons">\n                <button class="rtb-btn rtb-btn--primary rtb-btn--small"\n                        ng-bind="modal.params.submitButtonCaption"\n                        hm-tap="modal.submit()"></button>\n                <button class="rtb-btn rtb-btn--secondary rtb-btn--small"\n                        ng-bind="modal.params.cancelButtonCaption"\n                        ng-show="modal.params.cancelButtonCaption"\n                        hm-tap="modal.cancel()"></button>\n            </div>\n\n            <div class="modal-text__learn-more" ng-show="modal.learnMoreLink">\n                <a ng-href="{{ modal.learnMoreLink }}" target="_blank">{{ modal.learnMoreText }}</a>\n            </div>\n\n            <div class="modal-content__note" ng-show="modal.note">\n                {{ modal.note }}\n            </div>\n        </div>\n    </div>\n</div>\n'},452:function(n,e,t){"use strict";var a=t(21),o=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(e,n),e.prototype.init=function(){n.prototype.init.call(this),this.iconURL=this.params.iconURL,this.params.submitButtonCaption&&(this.buttonsVisible=!0)},e}(t(733).a);e.a=o},520:function(n,e,t){var a=t(3320);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(24)(a,o);a.locals&&(n.exports=a.locals)},524:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var a=t(327);function o(){return Object(a.a)(),t(520),t(3540)}},530:function(n,e,t){"use strict";t.d(e,"b",function(){return o}),t.d(e,"a",function(){return d});var a=t(623);function o(n){return"undefined"!==typeof n&&(n.lockedByAccountExpired||n.lockedByUsersPerBoardLimitExceeded||n.lockedByUsersPerAccountLimitExceeded||n.lockedByBoardsPerAccountLimitExceeded||n.lockedByActiveBoardsPerAccountLimitExceeded)}function d(n){return n.lockedByAccountExpired?a.a.ACCOUNT_EXPIRED:n.lockedByUsersPerBoardLimitExceeded||n.lockedByUsersPerAccountLimitExceeded||n.lockedByBoardsPerAccountLimitExceeded?a.a.ACCOUNT_LIMITS_EXCEEDED:n.lockedByActiveBoardsPerAccountLimitExceeded?a.a.ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED:null}},623:function(n,e,t){"use strict";var a;!function(n){n[n.ACCOUNT_EXPIRED=0]="ACCOUNT_EXPIRED",n[n.ACCOUNT_LIMITS_EXCEEDED=1]="ACCOUNT_LIMITS_EXCEEDED",n[n.ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED=2]="ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED"}(a||(a={})),e.a=a},860:function(n,e,t){"use strict";var a=t(21),o=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return Object(a.d)(e,n),e}(t(664).a);e.a=o}}]);
//# sourceMappingURL=cmn~Bil~Boa~ShaAndInv.edb2673b9116a4b9bafe.js.map