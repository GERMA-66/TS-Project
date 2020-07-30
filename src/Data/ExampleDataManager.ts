class ExampleDataManager 
{
	private static _instance:ExampleDataManager;

	public static get instance():ExampleDataManager
	{
		if( this._instance == null )
		{
			this._instance = new ExampleDataManager();
		}
		return this._instance;
	}

	private _clickNum:number;
	public constructor() 
	{
		this._clickNum = 0;
	}

	public get clickNum():number
	{
		return this._clickNum;
	} 

	public set clickNum( value:number )
	{
		this._clickNum = value;
		Message.instance.send( MsgCMD.UPDATE_EXAMPLE_CLICK_NUM );
	}

}