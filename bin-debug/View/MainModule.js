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
var MainModule = (function (_super) {
    __extends(MainModule, _super);
    function MainModule() {
        var _this = _super.call(this) || this;
        ExampleConfig.instnace.init(); //？？？？？？？？？？？？
        _this.viewSp = new egret.Sprite(); //实例化viewSp精灵
        _this.addChild(_this.viewSp); //在舞台上添加viewSp精灵
        _this.firstSp = new egret.Sprite(); //实例化firstSp精灵
        _this.addChild(_this.firstSp); //在舞台上添加firstSp精灵
        _this.firstSp.addChild(PanelController.instance); //???
        _this.firstSp.addChild(TipTextController.instance); //???
        _this.viewSp.addChild(new ExampleModule1()); //在viewSp精灵上添加ExampleModule1类
        _this.addMessage(MsgCMD.SHOW_EXAMPLE_1_MODULE, _this); //添加监听
        _this.addMessage(MsgCMD.SHOW_EXAMPLE_2_MODULE, _this); //添加监听
        return _this;
    }
    MainModule.prototype.recvMsg = function (cmd, data) {
        switch (cmd) {
            case MsgCMD.SHOW_EXAMPLE_1_MODULE:
                this.removeAll();
                this.viewSp.addChild(new ExampleModule1()); //跳转第一个实例模块
                break;
            case MsgCMD.SHOW_EXAMPLE_2_MODULE:
                this.removeAll();
                this.viewSp.addChild(new ExampleModule2(data)); //跳转第二个实例模块
                break;
        }
    };
    //删除方法
    MainModule.prototype.removeAll = function () {
        var num = this.viewSp.numChildren;
        for (var i = 0; i < num; ++i) {
            this.viewSp.removeChildAt(i);
        }
    };
    return MainModule;
}(BaseSprite));
__reflect(MainModule.prototype, "MainModule", ["IMessage"]);
//# sourceMappingURL=MainModule.js.map