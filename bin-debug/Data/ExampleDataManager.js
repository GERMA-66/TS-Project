var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ExampleDataManager = (function () {
    function ExampleDataManager() {
        this._clickNum = 0;
    }
    Object.defineProperty(ExampleDataManager, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ExampleDataManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExampleDataManager.prototype, "clickNum", {
        get: function () {
            return this._clickNum;
        },
        set: function (value) {
            this._clickNum = value;
            Message.instance.send(MsgCMD.UPDATE_EXAMPLE_CLICK_NUM);
        },
        enumerable: true,
        configurable: true
    });
    return ExampleDataManager;
}());
__reflect(ExampleDataManager.prototype, "ExampleDataManager");
//# sourceMappingURL=ExampleDataManager.js.map