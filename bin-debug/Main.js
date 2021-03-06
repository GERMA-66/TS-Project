//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        _this.arr = [
            /**
             * 关卡id，在游戏没用到，我自己看着眼花加的
             * 是否已经解锁关卡
             * 关卡是否已经过关了
             * 解锁关卡是否需要看视频，如果需要视频解锁，在通关上一关之后，直接解锁i+1关
             */
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
            [
                { id: 1, open: true, open1: false, video_bool: false, },
                { id: 2, open: false, open1: false, video_bool: false, },
                { id: 3, open: false, open1: false, video_bool: false, },
                { id: 4, open: false, open1: false, video_bool: true, },
                { id: 5, open: false, open1: false, video_bool: false, },
                { id: 6, open: false, open1: false, video_bool: false, },
                { id: 7, open: false, open1: false, video_bool: true, },
                { id: 8, open: false, open1: false, video_bool: false, },
                { id: 9, open: false, open1: false, video_bool: false, },
                { id: 10, open: false, open1: false, video_bool: false, },
                { id: 11, open: false, open1: false, video_bool: true, },
                { id: 12, open: false, open1: false, video_bool: false, },
                { id: 13, open: false, open1: false, video_bool: false, },
                { id: 14, open: false, open1: false, video_bool: false, },
                { id: 15, open: false, open1: false, video_bool: false, },
                { id: 16, open: false, open1: false, video_bool: true, },
                { id: 17, open: false, open1: false, video_bool: false, },
                { id: 18, open: false, open1: false, video_bool: false, },
                { id: 19, open: false, open1: false, video_bool: false, },
                { id: 20, open: false, open1: false, video_bool: true, }
            ],
        ];
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.startCreateScene = function () {
        // var data: string = "";
        // for (var i = 0; i < this.arr.length; i++) {
        //     for (var j = 0; j < this.arr[i].length; j++) {
        //         if (i == this.arr.length - 1 && j == this.arr[i].length - 1 || j == this.arr[i].length - 1) {
        //             data += "" + Number(this.arr[i][j].open) + "_" + Number(this.arr[i][j].open1);
        //         } else {
        //             data += "" + Number(this.arr[i][j].open) + "_" + Number(this.arr[i][j].open1) + "|";
        //         }
        //     }
        // }
        // egret.log(data.length - 1);
        // data.slice(data.length - 1, 1);
        // egret.log(data);
        var bitmap = new egret.Bitmap(RES.getRes("2732x2048_jpg"));
        this.addChild(bitmap);
        // this.addChild(new MainModule());
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map