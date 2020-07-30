class MainModule extends BaseSprite implements IMessage//跳转界面类
{
	/**viewSp精灵 */
	private viewSp:egret.Sprite;
	/**firstSp精灵 */
	private firstSp:egret.Sprite;

	public constructor() 
	{
		super();

		ExampleConfig.instnace.init();//？？？？？？？？？？？？

		this.viewSp = new egret.Sprite();//实例化viewSp精灵
		this.addChild( this.viewSp );//在舞台上添加viewSp精灵

		this.firstSp = new egret.Sprite();//实例化firstSp精灵
		this.addChild( this.firstSp );//在舞台上添加firstSp精灵

		this.firstSp.addChild( PanelController.instance );//???
        this.firstSp.addChild( TipTextController.instance );//???
        
		this.viewSp.addChild( new ExampleModule1() );//在viewSp精灵上添加ExampleModule1类

		this.addMessage( MsgCMD.SHOW_EXAMPLE_1_MODULE , this );//添加监听
		this.addMessage( MsgCMD.SHOW_EXAMPLE_2_MODULE , this );//添加监听
	}

	recvMsg( cmd:number, data:any):void
	{
		switch( cmd )
		{
			case MsgCMD.SHOW_EXAMPLE_1_MODULE:
				this.removeAll();
				this.viewSp.addChild( new ExampleModule1() );//跳转第一个实例模块
			break;
			case MsgCMD.SHOW_EXAMPLE_2_MODULE:
				this.removeAll();
				this.viewSp.addChild( new ExampleModule2( data ) );//跳转第二个实例模块
			break;
		}
	}
	//删除方法
	private removeAll():void{

		let num:number = this.viewSp.numChildren;

		for( var i:number = 0 ; i < num ; ++i )
		{
			this.viewSp.removeChildAt( i );
		}
	}
}