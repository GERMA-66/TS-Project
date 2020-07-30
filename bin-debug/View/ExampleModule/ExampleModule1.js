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
var ExampleModule1 = (function (_super) {
    __extends(ExampleModule1, _super); //实例模块1
    //构造方法
    function ExampleModule1() {
        return _super.call(this) || this;
    }
    //???
    ExampleModule1.prototype.add_view_handler = function (e) {
        _super.prototype.add_view_handler.call(this, e);
    };
    //创造子类
    ExampleModule1.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addChild(new game.Image("bg_jpg")); //在舞台上添加背景
        //动态图
        var mc = new MovieClipCompnent("tesAni", false); //实例化动态图属性
        mc.gotoAndPlay("ani1"); //ani1狗动态图，ani2咬衣服动态图，ani3抖耳朵动态图
        mc.x = 20; //动态图起始x坐标
        mc.y = 600; //动态图起始y坐标
        this.addChild(mc); //添加动态图
        var showExample2Btn = new eui.Button(); //实例化一个按钮
        showExample2Btn.skinName = "CommonBtn1Skin"; //按钮皮肤
        showExample2Btn.label = "跳转"; //按钮文本
        showExample2Btn.width = 200; //按钮的宽度
        showExample2Btn.height = 150; //按钮的高度
        showExample2Btn.x = 270; //按钮初始的x坐标
        showExample2Btn.y = 400; //按钮初始的Y坐标
        this.addChild(showExample2Btn); //在舞台上添加跳转按钮
        /**给跳转按钮添加一个点击方法监听器 */
        this.addListener(showExample2Btn, egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
        var showTipBtn = new eui.Button(); //实例化一个tip按钮
        showTipBtn.skinName = "CommonBtn1Skin"; //按钮皮肤
        showTipBtn.label = "tip"; //按钮文本
        showTipBtn.width = 200;
        showTipBtn.height = 150;
        showTipBtn.x = 10;
        showTipBtn.y = 400;
        this.addChild(showTipBtn);
        /**给tip按钮添加一个点击方法监听器 */
        this.addListener(showTipBtn, egret.TouchEvent.TOUCH_TAP, this.showTipHandler, this);
        var tx = new game.Label; //实例化一个文本特效
        tx.width = 400; //文本特效的宽度
        tx.x = 10; //起始x坐标
        tx.y = 50; //起始Y坐标
        tx.textColor = 0; //文本颜色
        tx.size = 20; //文本字体大小
        tx.fontFamily = "微软雅黑"; //文本字体
        tx.textAlign = egret.HorizontalAlign.CENTER; //文本在容器的水平中心对齐内容
        tx.addTextFlow("");
        tx.addTextFlow("妈妈再也不用担心我在", null, 12); //第一句显示不出来！！！！！！！！！！！！！！
        tx.addTextFlow("Egret", 0x336699, 60, null, false, 0x6699cc, 2);
        tx.addTextFlow("里说一句话不能包含各种", null, null, "楷体");
        tx.addTextFlow("五", 0xff0000);
        tx.addTextFlow("彩", 0xff0000);
        tx.addTextFlow("缤", 0xff0000);
        tx.addTextFlow("纷", 0xff0000);
        tx.addTextFlow("、\n");
        tx.addTextFlow("大", null, 36);
        tx.addTextFlow("小", null, 6);
        tx.addTextFlow("不", null, 16);
        tx.addTextFlow("一", null, 24);
        tx.addTextFlow("、");
        tx.addTextFlow("格", 0x00ff00, null, null, true);
        tx.addTextFlow("式", 0xf000f0, 16);
        tx.addTextFlow("各", 0xf06f00, null, null, true);
        tx.addTextFlow("样", null, null, "楷体");
        tx.addTextFlow("的文字了！");
        this.addChild(tx);
        this.inputTex = new eui.EditableText();
        this.inputTex.width = 440;
        this.inputTex.height = 80;
        this.inputTex.border = true;
        this.inputTex.borderColor = 0;
        this.inputTex.textColor = 0;
        this.inputTex.prompt = "请输入要向下一个Module传的值";
        this.inputTex.x = 20;
        this.inputTex.y = 200;
        this.addChild(this.inputTex);
    };
    ExampleModule1.prototype.touchTapHandler = function (e) {
        Message.instance.send(MsgCMD.SHOW_EXAMPLE_2_MODULE, { value: this.inputTex.text });
    };
    ExampleModule1.prototype.showTipHandler = function (e) {
        TipTextController.instance.show("智商-1", Contents.TIP_TEXT_COLOR_RED);
    };
    return ExampleModule1;
}(BaseModule //实例模块1
));
__reflect(ExampleModule1.prototype, "ExampleModule1");
//# sourceMappingURL=ExampleModule1.js.map