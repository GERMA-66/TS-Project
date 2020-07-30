class ExampleModule2 extends BaseModule implements IMessage {
	private exml_returnBtn: eui.Button;
	private exml_playBgMusicBtn: eui.Button;
	private exml_playSoundEffectBtn: eui.Button;
	private exml_stopBgMusicBtn: eui.Button;
	private exml_label: eui.Label;

	private exml_dataBtn: eui.Button;

	private paramsValue: any;

	private exml_scroller: eui.Scroller;
	private exml_list: eui.List;

	public constructor(data: any) {
		super();
		this.skinName = "exampleModuleSkin";

		this.paramsValue = data;
	}

	public add_view_handler(e: egret.Event): void {

		super.add_view_handler(e);

		this.addListener(this.exml_returnBtn, egret.TouchEvent.TOUCH_TAP, this.returnHandler, this);
		this.addListener(this.exml_playBgMusicBtn, egret.TouchEvent.TOUCH_TAP, this.playBgMusicHandler, this);
		this.addListener(this.exml_stopBgMusicBtn, egret.TouchEvent.TOUCH_TAP, this.stopBgMusicHandler, this);
		this.addListener(this.exml_playSoundEffectBtn, egret.TouchEvent.TOUCH_TAP, this.playEffectSoundHandler, this);

		this.addListener(this.exml_dataBtn, egret.TouchEvent.TOUCH_TAP, this.testDataHandler, this);

		this.addMessage(MsgCMD.UPDATE_EXAMPLE_CLICK_NUM, this);

	}

	recvMsg(cmd: number, data: any): void {
		switch (cmd) {
			case MsgCMD.UPDATE_EXAMPLE_CLICK_NUM:
				this.updateClickNum();
				break;
		}
	}

	createChildren(): void {

		super.createChildren();

		this.exml_label.text = this.paramsValue.value;

		this.exml_list.itemRenderer = ExampleRenderer;
		this.exml_list.dataProvider = new eui.ArrayCollection(ExampleConfig.instnace.getExampleArr());

		this.exml_scroller.horizontalScrollBar.autoVisibility = false;
		this.exml_scroller.horizontalScrollBar.visible = false;
		this.exml_scroller.verticalScrollBar.autoVisibility = false;
		this.exml_scroller.verticalScrollBar.visible = false;

		this.updateClickNum();
	}
	private updateClickNum(): void {
		this.exml_dataBtn.label = "测试事件机制:" + ExampleDataManager.instance.clickNum;
	}
	private returnHandler(e: egret.TouchEvent): void {
		Message.instance.send(MsgCMD.SHOW_EXAMPLE_1_MODULE);
	}
	private playBgMusicHandler(e: egret.TouchEvent): void {
		SoundManager.instance.startBgMusic("jiemianbgm_mp3");
	}
	private stopBgMusicHandler(e: egret.TouchEvent): void {
		SoundManager.instance.stopBgMusic();
	}
	private playEffectSoundHandler(e: egret.TouchEvent): void {
		SoundManager.instance.playEffect("tanhuang_wav");
	}
	private testDataHandler(e: egret.TouchEvent): void {
		ExampleDataManager.instance.clickNum++;
	}
}