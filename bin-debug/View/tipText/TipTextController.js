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
/**
 * Created by yangyang on 16/6/27.
 */
var TipTextController = (function (_super) {
    __extends(TipTextController, _super);
    function TipTextController() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = false;
        _this.touchChildren = false;
        return _this;
    }
    Object.defineProperty(TipTextController, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new TipTextController();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TipTextController.prototype.show = function (msg, textColor) {
        var tip = new TipView(msg, textColor);
        tip.x = this.stage.stageWidth / 2 - tip.width / 2;
        tip.y = 400;
        this.addChild(tip);
    };
    return TipTextController;
}(egret.Sprite));
__reflect(TipTextController.prototype, "TipTextController");
//# sourceMappingURL=TipTextController.js.map