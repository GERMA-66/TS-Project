/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */


class PanelController extends BaseSprite//面板控制器
{
	/**实例 */
	private static _instance:PanelController;

	public static get instance():PanelController
	{
		if( !this._instance )
		{
			this._instance = new PanelController();
		}
		return this._instance;
	}
	private panelArr:egret.DisplayObject[];
	public constructor() 
	{
		super();
		this.panelArr  = [];
		this.addListener( this , egret.Event.ADDED_TO_STAGE , this.onAddToStage , this );
	}
	private onAddToStage( e:egret.Event ):void{
	}
	public add( dis:egret.DisplayObject ):void{
		if( this.panelArr.indexOf( dis ) != -1 )	return;
		this.addChild( dis );
		this.panelArr.push( dis );
	}
	public remove( dis:egret.DisplayObject ):void{
		var index:number = this.panelArr.indexOf( dis );
		if( index == -1 )	return;
		this.panelArr.splice( index , 1 );
		this.removeChild( dis );
		dis = null;	
	}
	public removeAll():void{
		for( var i:number = 0 ; i < this.panelArr.length ; ++i )
		{
			this.removeChild( this.panelArr[i] );
			this.panelArr[i] = null;
		}
		this.panelArr = [];
	}
	public hide( cls:any ):void{
		for( var i:number = 0 ; i < this.panelArr.length ; ++i )
		{
			if( this.panelArr[i] instanceof cls )
			{
				this.panelArr[i].visible = false;
			}
		}
	}
	public show( cls:any ):void{
		for( var i:number = 0 ; i < this.panelArr.length ; ++i )
		{
			if( this.panelArr[i] instanceof cls )
			{
				this.panelArr[i].visible = true;
			}
		}
	}
}