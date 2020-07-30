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
var ExampleConfig = (function (_super) {
    __extends(ExampleConfig, _super); //实例配置
    //构造方法
    function ExampleConfig() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ExampleConfig, "instnace", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ExampleConfig(); //实例化
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ExampleConfig.prototype.init = function () {
        this.dataList = []; //初始化数据列表
        _super.prototype.init.call(this, "exampleConfig_txt", ExampleConfigModel, this.dataList);
    };
    ExampleConfig.prototype.getExampleArr = function () {
        return this.dataList;
    };
    ExampleConfig.prototype.getExamnpleById = function (id) {
        for (var i = 0; i < this.dataList.length; ++i) {
            if (this.dataList[i].id == id) {
                return this.dataList[i];
            }
        }
        return null;
    };
    return ExampleConfig;
}(BaseConfig //实例配置
));
__reflect(ExampleConfig.prototype, "ExampleConfig");
//# sourceMappingURL=ExampleConfig.js.map