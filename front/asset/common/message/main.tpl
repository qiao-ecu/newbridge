<!-- 聊天消息 -->
<!-- target: textMessage -->
<div class="chat-message-container" data-msgid="${id}" data-bid="${bid}">
    <!-- if: ${from} == 0 -->
    <!-- // 自己发的是0 -->
    <div class="chat-message chat-visitor">
    <!-- else -->
    <div class="chat-message chat-service">
    <!-- /if -->
        <div class="chat-message-title">
            <span class="chat-person">${name}</span>
            <span class="chat-time">${timestamp|timeStamp2Date('!yyyy-MM-dd! HH:mm:ss')}</span>
            <!-- if: ${messageCategory} == 5 -->
            (系统发送)
            <!-- /if -->
            <!-- if: ${status} == 1 -->
            <span class="chat-message-fail">!</span>
            <!-- /if -->
        </div>
        <div class="chat-message-content selectable">
            ${content|antiXSS}
        </div>
    </div>
</div>

<!-- 系统消息 -->
<!-- target: systemMessage -->
<div class="system-message-container">
    <div class="system-message">
        <!-- if: ${timestamp} -->
        <span>${timestamp|timeStamp2Date('!yyyy-MM-dd! HH:mm:ss')}</span>
        <!-- /if -->
        <span>${content|antiXSS}</span>
    </div>
</div>
