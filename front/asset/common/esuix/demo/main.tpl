<!-- target: demoView -->
<div class="content">
    <div class="cont">
    <!-- Tab切换 -->
    <div data-ui="type:Tab;id:authorityTab;id:tab;activeIndex:10;" class="content-tab">
        <ul data-role="navigator">
            <li data-for="base">常用控件</li>
            <li data-for="sellist">下拉列表</li>
            <li data-for="table">表格</li>
            <li data-for="time">日历时间</li>
            <li data-for="tip">提示框</li>
            <li data-for="region">地域</li>
            <li data-for="tree">Tree</li>
            <li data-for="tips">Tips</li>
            <li data-for="tabs">Tab</li>
            <li data-for="forms">表单交互</li>
            <li data-for="colorPick">拾色器</li>
        </ul>
        <div>
            <div id="base">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">CheckBox</p>
                        <div class="item_con">
                            <div data-ui="type:CheckBox;id:checkbox;checked;"></div>
                            <div data-ui="type:CheckBox;id:checkbox;"></div>
                            <div data-ui="type:CheckBox;id:checkboxDisable;disabled:disabled"></div>
                            <div data-ui="type:CheckBox;id:checkboxCheckedDisable;checked:checked;disabled:disabled"></div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Radio</p>
                        <div class="item_con">
                            <input type="radio" name="radio" checked />
                            <input type="radio" name="radio" />
                            <input type="radio" name="radioDisable" disabled checked />
                            <input type="radio" name="radioDisable" disabled />
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Slider</p>
                        <div class="item_con">
                            <div data-ui="type:Slider;id:slider;"></div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Pager</p>
                        <div class="item_con">
                            <div data-ui="type:Pager;id:pager"></div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">CommandMenu</p>
                        <div class="item_con">
                            <div data-ui="type:CommandMenu;id:commandMenu" class="ui-commandmenu-icon"></div>
                            <div class="ui-refresh">刷新</div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">TextBox</p>
                        <div class="item_con"><div data-ui="type:TextBox;id:textBox"></div></div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Suggest</p>
                        <div class="item_con"><div data-ui="type:Suggest;id:search;width:200;"></div></div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Button</p>
                        <div class="item_con"><div data-ui="type:Button;id:ok" class="ui-button-ok">确定</div>
                        <div data-ui="type:Button;id:cancel" class="ui-button-circle">取消</div>
                        <div data-ui="type:Button;id:okBtn" class="ui-button-ok ui-button-new">新建账号</div>
                        </br></br>
                        <div data-ui="type:Button;id:okDisabled" class="ui-button-ok">确定</div>
                        <div data-ui="type:Button;id:cancelDisabled" class="ui-button-circle">取消</div>
                    </li>
                    <li class="item">
                        <p class="item_tit">表头Button</p>
                        <div class="item_con"><div data-ui="type:Button;id:tableBtn" class="ui-button-thead">删除</div>
                        <div data-ui="type:Button;id:tableBtnDisabled" class="ui-button-thead">删除</div></div>
                    </li>
                </ul>
            </div>
            <div id="sellist">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">MultiSelect</p>
                        <div class="item_con"><div data-ui="type:MultiSelect;id:multiSelect;width:200;"></div></div>
                    </li>
                    <li class="item">
                        <p class="item_tit">SelectList</p>
                        <div class="item_con"><div data-ui="type:SelectList;id:select;width:200;"></div></div>
                    </li>
                </ul>
            </div>
            <div id="table" class="table-content">
                <div data-ui="type:Table;id:table"></div>
            </div>
            <div id="time">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">DateRange</p>
                        <div class="item_con">
                            <div data-ui="type:DateRange;id:dateRange"></div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">RangeCalendar</p>
                        <div class="item_con">
                            <div data-ui="type:RangeCalendar;id:rangeCalendar"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="tip">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">Toast</p>
                        <div class="item_con">
                            <div class="toast-con"><div data-ui="type:Toast;id:toastSucc"></div></div>
                            <div class="toast-con"><div data-ui="type:Toast;id:toastAlert" class="toastAlert"></div></div>
                        </div>
                    </li>
                    <!--<li class="item">
                        <p class="item_tit">ShowMsgTip</p>
                        <div class="item_con">
                            <div data-ui="type:ShowMsgTip;id:showMsgTip"></div>
                        </div>
                    </li>-->
                    <li class="item">
                        <p class="item_tit">Validity</p>
                        <div class="item_con" style="width:108px;">
                            <div data-ui="type:RealTimeValidityForm;id:realTimeValidityForm;">
                                <div data-ui="type:Validity;id:validity"></div>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Dialog-Confirm-成功提示框</p>
                        <div class="item_con">
                            <div data-ui="type:Button;id:confirmOk" class="ui-button-ok">确定</div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Dialog-Confirm-警告提示框</p>
                        <div class="item_con">
                            <div data-ui="type:Button;id:confirmWarn" class="ui-button-ok">删除</div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Dialog-Alert-成功提示框</p>
                        <div class="item_con">
                            <div data-ui="type:Button;id:alertOk" class="ui-button-ok">确定</div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Dialog-Alert-警告提示框</p>
                        <div class="item_con">
                            <div data-ui="type:Button;id:alertWarn" class="ui-button-ok">删除</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="region">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">Region</p>
                        <div class="item_con">
                            <div data-ui="type:Region;id:region;"></div>
                        </div>
                    </li>
                    <!-- <li class="item">
                        <p class="item_tit">Region</p>
                        <div class="item_con">
                            <div data-ui="type:Region;id:region;mode:single;"></div>
                        </div>
                    </li> -->
                </ul>
            </div>
            <div id="tree">
                <ul class="info_cont">
                    <li class="item">
                        <div data-ui="type:Tree;id:tree;"></div>
                    </li>
                </ul>
            </div>
            <div id="tips">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">Tips</p>
                        <div class="item_con">
                            <span id="verTips">Hover我展示</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="tabs">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit">Tab</p>
                        <div class="item_con">
                            <div style="width:408px;">
                                <div data-ui="type:Tab;id:authorityTab;id:tabDemo;activeIndex:0;" class="pag-tab">
                                    <ul data-role="navigator">
                                        <li data-for="tab1">Tab1</li>
                                        <li data-for="tab2">Tab2</li>
                                        <li data-for="tab3">Tab3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Tab</p>
                        <div class="item_con">
                            <div style="width:408px;">
                                <div data-ui="type:Tab;id:authorityTab;id:tabDemo2;activeIndex:0;" class="content-tab">
                                    <ul data-role="navigator">
                                        <li data-for="tab1">Tab1</li>
                                        <li data-for="tab2">Tab2</li>
                                        <li data-for="tab3">Tab3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <p class="item_tit">Tab居中显示</p>
                        <div class="item_con">
                            <div style="width:408px;">
                                <div data-ui="type:Tab;id:authorityTab;id:tabDemo3;activeIndex:0;" class="content-tab tab-center">
                                    <ul data-role="navigator">
                                        <li data-for="tab1">Tab1</li>
                                        <li data-for="tab2">Tab2</li>
                                        <li data-for="tab3">Tab3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="forms">
                <ul class="info_cont">
                    <li class="item">
                        <p class="item_tit"></p>
                        <div class="item_con">
                            <div data-ui="type:RealTimeValidityForm;id:formInteraction;">
                                <ul class="list">
                                    <li>
                                        <span class="list_tit">账号</span>
                                        <div class="list_cont">
                                            <div data-ui="type:TextBox;id:user;name:user;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="list_tit">昵称</span>
                                        <div class="list_cont">
                                            <div data-ui="type:TextBox;id:nickName;name:nickName;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="list_tit">密码</span>
                                        <div class="list_cont">
                                            <div data-ui="type:TextBox;id:pwd;mode:password;name:pwd;"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="list_tit">&nbsp;</span>
                                        <div class="list_cont">
                                            <div class="validity-bg">
                                                <div data-ui="type:Validity;id:user-validity"></div>
                                                <div data-ui="type:Validity;id:nickName-validity"></div>
                                                <div data-ui="type:Validity;id:pwd-validity"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span class="list_tit">&nbsp;</span>
                                        <div class="list_cont">
                                            <div data-ui="type:Button;id:formOk;" class="ui-button-ok" style="margin-right: 10px;">确定</div><div data-ui="type:Button;id:formCancel;" class="ui-button-circle">取消</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="colorPick">
                <ul class="list">
                    <li>
                        <span class="list_tit">前景色</span>
                        <div class="list_cont">
                            <span class="pick-color" id="pickColorId" style="background:#fff;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div data-ui="type:Button;id:resetColor" id="resetColor" class="ui-button-ok">重置前景色</div>
                        </div>
                    </li>
                    <li>
                        <span class="list_tit">背景色</span>
                        <div class="list_cont">
                            <span class="pick-color" id="pickColorId2" style="background:#000;"></span>
                            <span class="pick-color" id="pickColorId3" style="background:#aa0000;"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</div>
<!-- target: bindAccount -->
<div>
    <span class="more-site" data-id="${userId}">
    <!-- if: ${siteListArr.length} > 1 -->
        <span class="more-site-suffix">等${siteListArr.length}个账号</span>
        ${firstSite}
    <!-- else -->
        ${firstSite}
    <!-- /if -->
    </span>
</div>