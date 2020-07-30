/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PanelController = (function (_super) {
    __extends(PanelController, _super); //面板控制器
    function PanelController() {
        var _this = _super.call(this) || this;
        _this.panelArr = [];
        _this.addListener(_this, egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Object.defineProperty(PanelController, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new PanelController();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PanelController.prototype.onAddToStage = function (e) {
    };
    PanelController.prototype.add = function (dis) {
        if (this.panelArr.indexOf(dis) != -1)
            return;
        this.addChild(dis);
        this.panelArr.push(dis);
    };
    PanelController.prototype.remove = function (dis) {
        var index = this.panelArr.indexOf(dis);
        if (index == -1)
            return;
        this.panelArr.splice(index, 1);
        this.removeChild(dis);
        dis = null;
    };
    PanelController.prototype.removeAll = function () {
        for (var i = 0; i < this.panelArr.length; ++i) {
            this.removeChild(this.panelArr[i]);
            this.panelArr[i] = null;
        }
        this.panelArr = [];
    };
    PanelController.prototype.hide = function (cls) {
        for (var i = 0; i < this.panelArr.length; ++i) {
            if (this.panelArr[i] instanceof cls) {
                this.panelArr[i].visible = false;
            }
        }
    };
    PanelController.prototype.show = function (cls) {
        for (var i = 0; i < this.panelArr.length; ++i) {
            if (this.panelArr[i] instanceof cls) {
                this.panelArr[i].visible = true;
            }
        }
    };
    return PanelController;
}(BaseSprite //面板控制器
));
__reflect(PanelController.prototype, "PanelController");
//# sourceMappingURL=PanelController.js.map