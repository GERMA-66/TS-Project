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
var TipView = (function (_super) {
    __extends(TipView, _super);
    function TipView(_info, _textColor) {
        var _this = _super.call(this) || this;
        _this.skinName = "TipsSkin";
        _this.info = _info;
        _this.textColor = _textColor;
        return _this;
    }
    TipView.prototype.add_view_handler = function (e) {
        _super.prototype.add_view_handler.call(this, e);
        this.init();
    };
    TipView.prototype.init = function () {
        this.touchEnabled = false;
        this.touchChildren = false;
        this.exml_infoLabel.textColor = this.textColor;
        this.exml_infoLabel.text = this.info;
        var tw = egret.Tween.get(this);
        tw.to({ y: this.y - 100 }, 1000);
        tw.call(this.removeMySelf, this);
    };
    TipView.prototype.removeMySelf = function () {
        if (this.parent) {
            if (this.parent.contains(this)) {
                this.parent.removeChild(this);
            }
        }
    };
    return TipView;
}(BaseModule));
__reflect(TipView.prototype, "TipView");
//# sourceMappingURL=TipView.js.map