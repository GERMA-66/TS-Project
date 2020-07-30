/**
 * Created by yangyang on 16/6/27.
 */
class TipTextController extends egret.Sprite
{

    private static  _instance:TipTextController;
    public static get instance():TipTextController
    {
        if( !this._instance )
        {
            this._instance = new TipTextController();
        }
        return this._instance;
    }
    
    public constructor()
    {
        super();
        this.touchEnabled = false;
        this.touchChildren = false;
    }
    public show( msg:string , textColor:number):void{
        
        let tip:TipView = new TipView( msg , textColor );
            tip.x = this.stage.stageWidth/2 - tip.width/2;
            tip.y = 400;
        this.addChild( tip );
    }
}
