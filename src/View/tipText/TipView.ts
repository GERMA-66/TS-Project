class TipView extends BaseModule
{
	private exml_infoLabel:eui.Label;

	private info:string;

	private textColor:number;
	public constructor( _info:string , _textColor:number ) 
	{
		super();
		this.skinName = "TipsSkin";

		this.info = _info;
		this.textColor = _textColor;
	}

	public add_view_handler( e:egret.Event ):void{

		super.add_view_handler( e );
		this.init();
	}
	private init():void{

		this.touchEnabled = false;
		this.touchChildren = false;
		this.exml_infoLabel.textColor = this.textColor;
		this.exml_infoLabel.text = this.info;

		let tw:egret.Tween = egret.Tween.get( this );
			tw.to( {y:this.y-100} , 1000 );
			tw.call( this.removeMySelf , this );
	}
	private removeMySelf():void
	{
		if( this.parent )
		{
			if( this.parent.contains( this ) )
			{
				this.parent.removeChild( this);
			}
		}
	}
}