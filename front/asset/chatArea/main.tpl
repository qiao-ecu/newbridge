<!-- target: chatArea -->
<div data-ui="type:Tab;id:chatAreaTab;" class="page-tab chat-area-main">
    <ul data-role="navigator" class="chat-area-tab-title" style="display: none;">
        <li data-for="conversation">对话</li>
        <li data-for="visitorInfo">访客信息</li>
        <li data-for="visitorTrace">访客轨迹</li>
        <li data-for="visitorCard">访客名片</li>
    </ul>
    <div class="chat-area-tab-content" style="top: 0;">
        <div id="conversation" data-ui="type:DualCachedPanel;id:conversation;url:/messageContainer">
        </div>
        <div id="visitorInfo" data-ui="type:DualCachedPanel;id:visitorInfo;url:/404">
        </div>
        <div id="visitorTrace" data-ui="type:DualCachedPanel;id:visitorTrace;url:/404">
        </div>
        <div id="visitorCard" data-ui="type:DualCachedPanel;id:visitorCard;url:/404">
        </div>
    </div>
</div>
