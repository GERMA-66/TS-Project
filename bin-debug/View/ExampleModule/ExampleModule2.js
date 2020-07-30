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
var ExampleModule2 = (function (_super) {
    __extends(ExampleModule2, _super);
    function ExampleModule2(data) {
        var _this = _super.call(this) || this;
        _this.skinName = "exampleModuleSkin";
        _this.paramsValue = data;
        return _this;
    }
    ExampleModule2.prototype.add_view_handler = function (e) {
        _super.prototype.add_view_handler.call(this, e);
        this.addListener(this.exml_returnBtn, egret.TouchEvent.TOUCH_TAP, this.returnHandler, this);
        this.addListener(this.exml_playBgMusicBtn, egret.TouchEvent.TOUCH_TAP, this.playBgMusicHandler, this);
        this.addListener(this.exml_stopBgMusicBtn, egret.TouchEvent.TOUCH_TAP, this.stopBgMusicHandler, this);
        this.addListener(this.exml_playSoundEffectBtn, egret.TouchEvent.TOUCH_TAP, this.playEffectSoundHandler, this);
        this.addListener(this.exml_dataBtn, egret.TouchEvent.TOUCH_TAP, this.testDataHandler, this);
        this.addMessage(MsgCMD.UPDATE_EXAMPLE_CLICK_NUM, this);
    };
    ExampleModule2.prototype.recvMsg = function (cmd, data) {
        switch (cmd) {
            case MsgCMD.UPDATE_EXAMPLE_CLICK_NUM:
                this.updateClickNum();
                break;
        }
    };
    ExampleModule2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.exml_label.text = this.paramsValue.value;
        this.exml_list.itemRenderer = ExampleRenderer;
        this.exml_list.dataProvider = new eui.ArrayCollection(ExampleConfig.instnace.getExampleArr());
        this.exml_scroller.horizontalScrollBar.autoVisibility = false;
        this.exml_scroller.horizontalScrollBar.visible = false;
        this.exml_scroller.verticalScrollBar.autoVisibility = false;
        this.exml_scroller.verticalScrollBar.visible = false;
        this.updateClickNum();
    };
    ExampleModule2.prototype.updateClickNum = function () {
        this.exml_dataBtn.label = "测试事件机制:" + ExampleDataManager.instance.clickNum;
    };
    ExampleModule2.prototype.returnHandler = function (e) {
        Message.instance.send(MsgCMD.SHOW_EXAMPLE_1_MODULE);
    };
    ExampleModule2.prototype.playBgMusicHandler = function (e) {
        SoundManager.instance.startBgMusic("jiemianbgm_mp3");
    };
    ExampleModule2.prototype.stopBgMusicHandler = function (e) {
        SoundManager.instance.stopBgMusic();
    };
    ExampleModule2.prototype.playEffectSoundHandler = function (e) {
        SoundManager.instance.playEffect("tanhuang_wav");
    };
    ExampleModule2.prototype.testDataHandler = function (e) {
        ExampleDataManager.instance.clickNum++;
    };
    return ExampleModule2;
}(BaseModule));
__reflect(ExampleModule2.prototype, "ExampleModule2", ["IMessage"]);
//# sourceMappingURL=ExampleModule2.js.map