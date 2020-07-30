/**
 * Created by Jacob.Yang on 2017/7/11.
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AnimationCompnent = (function (_super) {
    __extends(AnimationCompnent, _super);
    function AnimationCompnent(aniName, defaultAniName) {
        var _this = _super.call(this) || this;
        _this.aniName = aniName;
        _this.defaultAniName = defaultAniName;
        _this.aniIndex = 0;
        _this.aniHash = new HashMap();
        return _this;
    }
    AnimationCompnent.prototype.add_view_handler = function (e) {
        _super.prototype.add_view_handler.call(this, e);
        this.addMessage(MsgCMD.MOVIECLIP_PLAY_OVER, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(this.aniName);
    };
    AnimationCompnent.prototype.recvMsg = function (cmd, data) {
        switch (cmd) {
            case MsgCMD.MOVIECLIP_PLAY_OVER:
                if (this.mc == data) {
                    this.playNextAni();
                }
                break;
        }
    };
    AnimationCompnent.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName != this.aniName)
            return;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        var obj = RES.getRes(this.aniName + "_ani_json").desc;
        for (var i = 0; i < obj.length; ++i) {
            this.aniHash.put(obj[i].name, new AnimationDataModel(obj[i]));
        }
        this.play(this.defaultAniName);
    };
    AnimationCompnent.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    AnimationCompnent.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    AnimationCompnent.prototype.play = function (aniName) {
        var model = this.aniHash.get(aniName);
        if (model == null) {
            egret.warn("aniName:" + aniName + "is not exist");
        }
        else {
            this.aniName = model.name;
            this.aniIndex = 0;
            this.playAni(model.getAniByIndex(this.aniIndex), model.getPlayTimeByIndex(this.aniIndex));
        }
    };
    AnimationCompnent.prototype.playNextAni = function () {
        var model = this.aniHash.get(this.aniName);
        this.aniIndex++;
        var ani = model.ani;
        if (this.aniIndex >= ani.length) {
            this.aniIndex = 0;
            this.play(this.defaultAniName);
        }
        else {
            this.playAni(model.getAniByIndex(this.aniIndex), model.getPlayTimeByIndex(this.aniIndex));
        }
    };
    AnimationCompnent.prototype.playAni = function (aniName, playTime) {
        var tempMc = this.mc;
        egret.setTimeout(this.removeDis, this, 20, tempMc);
        this.mc = new MovieClipCompnent(aniName, false);
        this.mc.gotoAndPlay(aniName, playTime);
        this.addChild(this.mc);
    };
    AnimationCompnent.prototype.removeDis = function (tempMc) {
        if (tempMc != null) {
            if (this.contains(tempMc)) {
                this.removeChild(tempMc);
                tempMc.stop();
                tempMc = null;
            }
        }
    };
    AnimationCompnent.prototype.getAniName = function () {
        return this.aniName;
    };
    AnimationCompnent.prototype.getDefaultAniName = function () {
        return this.defaultAniName;
    };
    return AnimationCompnent;
}(BaseSprite));
__reflect(AnimationCompnent.prototype, "AnimationCompnent", ["IMessage"]);
var AnimationDataModel = (function () {
    function AnimationDataModel(obj) {
        this._name = obj.name;
        this._ani = obj.ani.split(",");
        this._playTime = [];
        var playTime = obj.playTime.split(",");
        for (var i = 0; i < playTime.length; ++i) {
            this._playTime.push(parseInt(playTime[i]));
        }
    }
    Object.defineProperty(AnimationDataModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationDataModel.prototype, "ani", {
        get: function () {
            return this._ani;
        },
        enumerable: true,
        configurable: true
    });
    AnimationDataModel.prototype.getAniByIndex = function (index) {
        if (index < 0 || index >= this._ani.length) {
            egret.warn("getAniByIndex,index不合法:" + index);
            return "";
        }
        return this._ani[index];
    };
    AnimationDataModel.prototype.getPlayTimeByIndex = function (index) {
        if (index < 0 || index >= this._playTime.length) {
            egret.warn("getPlayTimeByIndex,index不合法:" + index);
            return 0;
        }
        return this._playTime[index];
    };
    return AnimationDataModel;
}());
__reflect(AnimationDataModel.prototype, "AnimationDataModel");
//# sourceMappingURL=AnimationCompnent.js.map