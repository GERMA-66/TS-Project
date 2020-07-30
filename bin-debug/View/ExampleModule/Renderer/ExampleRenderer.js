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
var ExampleRenderer = (function (_super) {
    __extends(ExampleRenderer, _super);
    function ExampleRenderer() {
        var _this = _super.call(this) || this;
        _this.skinName = "ExampleRendererSkin";
        return _this;
    }
    ExampleRenderer.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.model = this.data;
        this.exml_idLabel.text = this.model.id + "";
        this.exml_nameLabel.text = this.model.name;
        this.exml_lvLabel.text = this.model.lv + "";
        this.exml_dpsLabel.text = this.model.dps + "";
    };
    return ExampleRenderer;
}(BaseItemrenerer));
__reflect(ExampleRenderer.prototype, "ExampleRenderer");
//# sourceMappingURL=ExampleRenderer.js.map