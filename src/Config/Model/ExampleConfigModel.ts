class ExampleConfigModel {
	public id: number;
	public name: string;
	public lv: number;
	public dps: number;

	public constructor(obj: string[]) {
		this.id = parseInt(obj[0]);
		this.name = obj[1];
		this.lv = parseInt(obj[2]);
		this.dps = parseInt(obj[3]);
	}
}