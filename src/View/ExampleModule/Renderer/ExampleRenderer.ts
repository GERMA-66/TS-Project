class ExampleRenderer extends BaseItemrenerer
{
	private exml_idLabel:eui.Label;
	private exml_nameLabel:eui.Label;
	private exml_lvLabel:eui.Label;
	private exml_dpsLabel:eui.Label;

	private model:ExampleConfigModel;
	public constructor() 
	{
		super();

		this.skinName = "ExampleRendererSkin";
	}

	dataChanged():void{

		super.dataChanged();
		this.model = this.data;
		this.exml_idLabel.text = this.model.id + "";
		this.exml_nameLabel.text = this.model.name;
		this.exml_lvLabel.text = this.model.lv + "";
		this.exml_dpsLabel.text = this.model.dps + "";
	}
}