define(function(require){var e=require("etpl"),t={status:0,data:{dataList:[{roleId:1,roleName:"超级管理员",account:"aaa",resource:"所有权限",tag:1},{roleId:2,roleName:"客服经理",account:"aaa",resource:"所有权限",tag:1},{roleId:3,roleName:"普通客服",account:"aaa,bbb",resource:"接待权限,留言管理,名片管理",tag:0},{roleId:4,roleName:"销售客服组长",account:"aaabbbccc,abcdefg",resource:"接待权限,留言管理",tag:0},{roleId:2,roleName:"客服经理",account:"aaa",resource:"所有权限",tag:1},{roleId:3,roleName:"普通客服",account:"aaa,bbb",resource:"接待权限,留言管理,名片管理",tag:0},{roleId:4,roleName:"销售客服组长",account:"aaa,bbb",resource:"接待权限,留言管理",tag:0},{roleId:2,roleName:"客服经理",account:"aaa",resource:"所有权限",tag:1},{roleId:3,roleName:"普通客服",account:"aaa,bbb",resource:"接待权限,留言管理,名片管理",tag:0},{roleId:4,roleName:"销售客服组长",account:"aaa,bbb",resource:"接待权限,留言管理",tag:0}]}},n={status:0,data:{totalCount:100,dataList:[{value:23,text:"PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11PC11",selected:!1},{value:27,text:"PC12",selected:!0},{value:32,text:"PC1",selected:!1},{value:34,text:"PC1",selected:!1},{value:36,text:"PC1",selected:!1},{value:38,text:"PC1",selected:!1},{value:40,text:"PC1",selected:!1},{value:42,text:"PC1",selected:!1},{value:44,text:"PC1",selected:!1},{value:46,text:"PC1",selected:!1},{value:48,text:"PC1",selected:!1},{value:52,text:"PC1",selected:!1},{value:54,text:"PC1",selected:!1},{value:56,text:"PC1",selected:!1},{value:58,text:"PC1",selected:!1},{value:60,text:"PC1",selected:!1},{value:62,text:"PC1",selected:!1},{value:64,text:"PC1",selected:!1},{value:66,text:"PC1",selected:!1},{value:68,text:"PC1",selected:!1},{value:70,text:"PC1",selected:!1},{value:72,text:"PC1",selected:!1},{value:74,text:"PC1",selected:!1},{value:76,text:"PC1",selected:!1},{value:78,text:"PC1",selected:!1},{value:80,text:"PC1",selected:!1},{value:82,text:"PC1",selected:!1},{value:84,text:"PC1",selected:!1},{value:86,text:"PC1",selected:!1}]}},i={status:0,data:{dataList:[{value:0,text:"nbcps_liuhb5 sdfasdfsafsadfsdfdsfsdafasfdsafsafsadfsaf",selected:!0},{value:3,text:"nbcps_liuhb5:q q",selected:!0},{value:42,text:"nbcps_liuhb5:sdfsfdsfs dsfdsfs",selected:!0},{value:43,text:"nbcps_liuhb5:tyfh gfhgfh",selected:!0},{value:44,text:"nbcps_liuhb5:fdgd fdgfdgd",selected:!0},{value:45,text:"nbcps_liuhb5:1 1111",selected:!0},{value:255,text:"nbcps_liuhb5:aaa111 aa",selected:!0}]}},r={status:0,data:{dataList:[{text:"账户1",value:1},{text:"账户2",value:2},{text:"账户3",value:3},{text:"账户4",value:4},{text:"账户1",value:1},{text:"账户2",value:2},{text:"账户3",value:3},{text:"账户4",value:4},{text:"账户1",value:1},{text:"账户2",value:2},{text:"账户3",value:3},{text:"账户4",value:4},{text:"账户1",value:1},{text:"账户2",value:2},{text:"账户3",value:3},{text:"账户4",value:4}]}},a={datasource:t.data.dataList,noDataHtml:'<p style="margin:0;">暂无数据</p>',select:"multi",selectMode:"line",fields:[{title:"角色",sortable:!0,width:150,content:function(e){var t="/user/newRole.action#/~roleId="+e.roleId;return'<a href="'+t+'">'+e.roleName+"</a>"}},{title:"说明",sortable:!0,width:110,content:function(e){var t;if(e.tag)t="默认角色";else t="自定义角色";return t}},{title:"绑定账号",sortable:!0,width:200,content:function(t){return t.urlNameList=t.account||"",t.siteListArr=t.urlNameList.split(","),t.firstSite=t.siteListArr[0]||"",e.render("bindAccount",t)}},{title:"权限",sortable:!0,width:120,content:function(e){var t=e.resource.replace(/,/g,"、");return'<span class="resource" title="'+t+'">'+t+"</span>"}},{title:"",sortable:!0,width:80,content:function(e){var t="",n="/user/newRole.action#/~roleId="+e.roleId;if(!e.tag)t+='<div class="right">';else t+='<div class="right">';if(t+='<a class="edit" href="'+n+'" title="编辑"></a>',!e.tag)t+='<span data-roleid="'+e.roleId+'" class="del" data-id="'+e.userId+'"" title="删除"></span>';return t+="</div>"}}]};return{table:a,findAllRoles:t,findSelectedStyle:n,findSelectedUser:i,queryFuzzy:r}});