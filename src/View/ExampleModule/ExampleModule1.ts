class ExampleModule1 extends BaseModule//实例模块1
{
    /**可编辑文本 */
    private inputTex:eui.EditableText;
    //构造方法
	public constructor() 
	{
		super();
	}
    //???
	public add_view_handler( e:egret.Event ):void{

		super.add_view_handler( e );
	}
    //创造子类
	createChildren():void{

		super.createChildren();

		this.addChild( new game.Image( "bg_jpg") );//在舞台上添加背景
        //动态图
        let mc:MovieClipCompnent = new MovieClipCompnent( "tesAni" , false );//实例化动态图属性
            mc.gotoAndPlay( "ani1" );//ani1狗动态图，ani2咬衣服动态图，ani3抖耳朵动态图
            mc.x = 20;//动态图起始x坐标
            mc.y = 600;//动态图起始y坐标
        this.addChild( mc );//添加动态图

        let showExample2Btn:eui.Button = new eui.Button();//实例化一个按钮
            showExample2Btn.skinName = "CommonBtn1Skin";//按钮皮肤
            showExample2Btn.label = "跳转";//按钮文本
            showExample2Btn.width = 200;//按钮的宽度
            showExample2Btn.height = 150;//按钮的高度
            showExample2Btn.x = 270;//按钮初始的x坐标
            showExample2Btn.y = 400;//按钮初始的Y坐标
        this.addChild( showExample2Btn );//在舞台上添加跳转按钮
        /**给跳转按钮添加一个点击方法监听器 */
        this.addListener( showExample2Btn , egret.TouchEvent.TOUCH_TAP , this.touchTapHandler , this );

        let showTipBtn:eui.Button = new eui.Button();//实例化一个tip按钮
            showTipBtn.skinName = "CommonBtn1Skin";//按钮皮肤
            showTipBtn.label = "tip";//按钮文本
            showTipBtn.width = 200;
            showTipBtn.height = 150;
            showTipBtn.x = 10;
            showTipBtn.y = 400;
        this.addChild( showTipBtn );
        /**给tip按钮添加一个点击方法监听器 */
        this.addListener( showTipBtn , egret.TouchEvent.TOUCH_TAP , this.showTipHandler , this );

        var tx:game.Label = new game.Label;//实例化一个文本特效
        tx.width = 400;//文本特效的宽度
        tx.x = 10;//起始x坐标
        tx.y = 50;//起始Y坐标
        tx.textColor = 0;//文本颜色
        tx.size = 20;//文本字体大小
        tx.fontFamily = "微软雅黑";//文本字体
        tx.textAlign = egret.HorizontalAlign.CENTER;//文本在容器的水平中心对齐内容
        tx.addTextFlow( "" );
        tx.addTextFlow( "妈妈再也不用担心我在" , null , 12 );//第一句显示不出来！！！！！！！！！！！！！！
        tx.addTextFlow( "Egret" , 0x336699 , 60  , null , false , 0x6699cc , 2 );
        tx.addTextFlow( "里说一句话不能包含各种" , null , null , "楷体" );
        tx.addTextFlow( "五" , 0xff0000 );
        tx.addTextFlow( "彩" , 0xff0000 );
        tx.addTextFlow( "缤" , 0xff0000 );
        tx.addTextFlow( "纷" , 0xff0000 );
        tx.addTextFlow( "、\n" );
        tx.addTextFlow( "大"  , null , 36 );
        tx.addTextFlow( "小"  , null , 6 );
        tx.addTextFlow( "不"  , null , 16 );
        tx.addTextFlow( "一"  , null , 24 );
        tx.addTextFlow( "、"  );
        tx.addTextFlow( "格"  , 0x00ff00 , null , null , true );
        tx.addTextFlow( "式"  , 0xf000f0 , 16 );
        tx.addTextFlow( "各"  , 0xf06f00 , null , null , true );
        tx.addTextFlow( "样"  , null , null , "楷体" );
        tx.addTextFlow( "的文字了！");

        this.addChild( tx );

        this.inputTex = new eui.EditableText();
        this.inputTex.width = 440;
        this.inputTex.height = 80;
        this.inputTex.border = true;
        this.inputTex.borderColor = 0;
        this.inputTex.textColor = 0;
        this.inputTex.prompt = "请输入要向下一个Module传的值";
        this.inputTex.x = 20;
        this.inputTex.y = 200;
        this.addChild( this.inputTex );
    }

    

    private touchTapHandler( e:egret.TouchEvent ):void{

        Message.instance.send( MsgCMD.SHOW_EXAMPLE_2_MODULE , { value: this.inputTex.text });
	}

    private showTipHandler( e:egret.TouchEvent ):void{

        TipTextController.instance.show( "智商-1" , Contents.TIP_TEXT_COLOR_RED );
    }
}