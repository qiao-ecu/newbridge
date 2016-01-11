<!-- target: visitorTrace -->
<div class="vistor-trace-container" id="traceLink">
<!-- for: ${vistorTrace.data} as ${item}, ${key} -->
<!-- if: ${item.messageType} == "traceEntry" -->
<!-- use: traceEntry(data=${item}) -->
<!-- /if -->
<!-- if: ${item.messageType} == "traceForward" -->
<!-- use: traceForward(data=${item}) -->
<!-- /if -->
<!-- if: ${item.messageType} == "traceLeave" -->
<!-- use: traceLeave(data=${item}) -->
<!-- /if -->
<!-- /for -->
</div>

<!-- target: traceEntry -->
<div class="vistor-trace-contain contain-${data.messageType}" data-top="${data.visitId}">
	<div class="vistor-trace-content content-startTime">
		<span class="startTime">${data.occurTime|timeStamp2Date('yyyy-MM-dd')}</span>
	</div>
	<div class="traceEntry-contain">
		<div class="vistor-trace-content">
			<div class="traceEntry-img"></div>
			<span>${data.occurTime|timeStamp2Date('!yyyy-MM-dd! HH:mm:ss')}</span>
			<span>
			<!-- if: ${data.fromUrl} !== "" &&  ${data.fromInfo} !== "" -->
			由<a href="${data.fromUrl}" class="trace-link trace-entry-link" data-url="${data.fromUrl}" target="_blank" title="${data.fromUrl}">${data.fromInfo}</a>
			<!-- /if -->
			<!-- if: ${data.fromInfo} !== "" &&  ${data.fromUrl} === "" -->
			由${data.fromInfo}
			<!-- /if -->
			进入
			<!-- if: ${data.localUrl} -->
			<a href="${data.localUrl}" class="trace-link trace-entry-link" data-url="${data.localUrl}" target="_blank" title="${data.localUrl}">${data.localInfo}</a></span>
			<!-- else -->
			<span>${data.localInfo}</span>
			<!-- /if -->
		</div>
	</div>
</div>

<!-- target: traceForward -->
<div class="vistor-trace-contain contain-${data.messageType}" data-top="${data.visitId}">
	<div class="trace-forward-stay">
		<span>停留${data.stayTime}</span>
	</div>
	<div class="trace-forward-info">
		<div class="trace-forward-text">
			<div class="traceEntry-img"></div>
			<span>${data.occurTime|timeStamp2Date('!yyyy-MM-dd! HH:mm:ss')}</span>
			<span>进入页面：</span>
			<!-- if: ${data.localUrl} -->
			<a href="${data.localUrl}" class="trace-link" data-url="${data.localUrl}" target="_blank" title="${data.localUrl}">${data.localInfo}</a>
			<!-- else -->
			<span>${data.localInfo}</span>
			<!-- /if -->
		</div>
	</div>
</div>

<!-- target: traceLeave -->
<div class="vistor-trace-contain contain-${data.messageType}" data-top="${data.visitId}">
	<div class="trace-leave-text">
		<span>${data.occurTime|timeStamp2Date('!yyyy-MM-dd! HH:mm:ss')}</span>
		<span>离开页面</span>
	</div>
</div>
