class ExampleConfig extends BaseConfig//实例配置
{
	/**实例 */
	private static _instance:ExampleConfig;

	public static get instnace():ExampleConfig
	{
		if( this._instance == null )
		{
			this._instance = new ExampleConfig();//实例化
		}
		return this._instance;
	}
	/**数据列表 */
	private dataList:ExampleConfigModel[];//示例配置模型
	//构造方法
	public constructor()
	{
		super();
	}

	public init():void{

		this.dataList = [];//初始化数据列表
		super.init( "exampleConfig_txt" , ExampleConfigModel , this.dataList );
	}

	public getExampleArr():ExampleConfigModel[]
	{
		return this.dataList;
	}

	public getExamnpleById( id:number ):ExampleConfigModel
	{
		for( var i:number = 0 ; i < this.dataList.length ; ++i )
		{
			if( this.dataList[i].id == id )
			{
				return this.dataList[i];
			}
		}
		return null;
	}
}