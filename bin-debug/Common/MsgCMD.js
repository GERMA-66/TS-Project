/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MsgCMD = (function () {
    function MsgCMD() {
    }
    MsgCMD.SHOW_EXAMPLE_1_MODULE = 10000000;
    MsgCMD.SHOW_EXAMPLE_2_MODULE = 10000001;
    MsgCMD.UPDATE_EXAMPLE_CLICK_NUM = 10000002;
    MsgCMD.MOVIECLIP_PLAY_OVER = 90000000;
    return MsgCMD;
}());
__reflect(MsgCMD.prototype, "MsgCMD");
//# sourceMappingURL=MsgCMD.js.map