<!-- target: visitiorInfo -->
<div class="customer-tip-container">
    <div class="customer-tip-info">
        <!-- if: ${infos.tipsInfo} -->
        <!-- if: ${infos.tipsInfo.fromGroup} -->
        <div class="customer-tip-head from-group">
        <!-- else -->
        <div class="customer-tip-head">
        <!-- /if -->
            <!-- <div class="customer-tip-portrait">
                <img src="${infos.tipsInfo.headUrl}"/>
            </div> -->
            <div class="customer-tip-name">
                ${infos.name}
            </div>
            <!-- if: ${infos.tipsInfo.fromGroup} -->
            <span class="group-name">访客咨询分组：${infos.tipsInfo.fromGroup}</span>
            <!-- /if -->
        </div>
        <div class="customer-tip-detail">
            <div class="customer-tip-row">
                <span class="customer-tip-title">访客永久身份：</span>${infos.id}
            </div>
            <div class="customer-tip-row">
                <!-- if: ${infos.tipsInfo.visitPages} -->
                <div class="customer-tip-row-left">
                    <span class="customer-tip-title">访问页：</span>${infos.tipsInfo.visitPages}页
                </div>
                <!-- /if -->
                <div class="customer-tip-row-right">
                    <!-- if: ${infos.tipsInfo.sendMsgs} -->
                    <span class="customer-tip-title">发送消息：</span>${infos.tipsInfo.sendMsgs}条
                    <!-- else -->
                    <span class="customer-tip-title">发送消息：</span>0条
                    <!-- /if -->
                </div>
            </div>
            <!-- if: ${infos.tipsInfo.keyWord} -->
            <div class="customer-tip-row">
                <span class="customer-tip-title">关键词：</span>${infos.tipsInfo.keyWord}
            </div>
            <!-- /if -->
            <!-- if: ${infos.tipsInfo.queryWord} -->
            <div class="customer-tip-row">
                <span class="customer-tip-title">搜索词：</span>${infos.tipsInfo.queryWord}
            </div>
            <!-- /if -->
            <div class="customer-tip-row">
                <span class="customer-tip-title">访客IP：</span>${infos.tipsInfo.ipArea} ${infos.tipsInfo.ip} ${infos.tipsInfo.ipIsp}
            </div>
        </div>
        <!-- else -->
        <div class="customer-tip-nodata">
        </div>
        <!-- /if -->
    </div>
    <div class="customer-tip-track vistor-trace-container">
        <!-- if: ${infos.tipsInfo} -->
        <!-- for: ${infos.traceInfo} as ${messageItem} -->
            <!-- use: traceEntry(data=${messageItem}) -->
        <!-- /for -->
        <!-- else -->
        <div class="customer-trace-nodata">
        </div>
        <!-- /if -->
    </div>
</div>
