var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ExampleConfigModel = (function () {
    function ExampleConfigModel(obj) {
        this.id = parseInt(obj[0]);
        this.name = obj[1];
        this.lv = parseInt(obj[2]);
        this.dps = parseInt(obj[3]);
    }
    return ExampleConfigModel;
}());
__reflect(ExampleConfigModel.prototype, "ExampleConfigModel");
//# sourceMappingURL=ExampleConfigModel.js.map