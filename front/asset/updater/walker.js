define(function(require){function e(e,r){return d(e,r).then(c).then(f).then(n).then(i).then(t).then(function(){console.log("checkout over")})}function t(){var e=g.Deferred();return p.getBranch(function(t,n){if(t)return void e.reject(t);else return void a("refs/remotes/origin/"+n).then(function(t){p.updateRef("refs/heads/"+n,t,function(t){if(t)throw t;e.resolve()})})}),e.promise()}function n(e,t){function n(){var e=r.pop();if(e){var t=e.from,s=e.to;y.compare(t,s,a);var l=a.modifyTree;if(v.map(l,function(e){b.mkdir("-p",e.to.path)}),!l.length&&!r.length&&!o)i.resolve(a);v.map(l,function(e){o++,h(e.from.hash,e.to.hash).then(function(t,i){r.push({from:t,to:i}),a.modifyTree=[],a.path=e.from.path+"/",o--,n()})})}}var i=g.Deferred(),r=[],a={};a.path="",b.mkdir("-p",a.path);var o=0;return r.push({from:e,to:t}),n(),i.promise()}function i(e){var t=g.Deferred(),n=[],i=v.pluck(e.removeBlob,"path")&&v.pluck(e.removeTree,"path");return b.rm("-rf",i),b.mkdir("-p",v.pluck(e.addTree,"path")),v.map(e.addTree,function(e){n.push(r(e.hash,e.path))}),v.map(e.addBlob,function(e){var t=g.Deferred();n.push(t.promise()),u(e.hash).then(function(n){console.log("新增文件"+e.path),w.writeFile(e.path,n,function(){t.resolve()})})}),v.map(e.modifyBlob,function(e){var t=g.Deferred();n.push(t.promise()),u(e.to.hash).then(function(n){console.log("修改文件"+e.to.path),w.writeFile(e.to.path,n,function(){t.resolve()})})}),g.when.apply(g,n).then(function(){t.resolve(e)}),t.promise()}function r(e,t){function n(){if(a--,!a)r.resolve()}function i(e,t){a++,t=t||"",s(e).then(function(e){var r=Object.keys(e);v.map(r,function(r){var o=e[r];if(o.mode===_.tree){var s=t+"/"+r;console.log("创建文件夹"+s),b.mkdir("-p",s),i(o.hash,s)}else if(o.mode===_.blob)a++,u(o.hash).then(function(e){var i=t+"/"+r;console.log("创建文件"+i),w.writeFile(i,e),n()})}),n()})}var r=g.Deferred(),a=0;return i(e,t),r.promise()}function a(e){var t=g.Deferred();if(/^[0-9a-f]{40}$/.test(e))t.resolve(e);if(/^ref:/.test(e)){var n=/^ref: *(.+)/.exec(e);if(n)e=n[1]}return p.readRef(e,function(n,i){if(!i)return void t.reject(n||new Error("Bad ref "+e));else return void a(i).then(function(e){t.resolve(e)},function(e){t.reject(e)})}),t.promise()}function o(e,t){var n=g.Deferred();return p.loadAs(e,t,function(e,t){if(e)n.reject(e);else n.resolve(t)}),n.promise()}function s(e){return o("tree",e)}function l(e){return o("commit",e)}function u(e){return o("blob",e)}function d(e,t){return g.when(a(e),a(t))}function c(e,t){return g.when(l(e),l(t))}function f(e,t){return g.when(s(e.tree),s(t.tree))}function h(e,t){return g.when(s(e),s(t))}var p,m=window.require,g=require("jquery"),v=require("underscore"),y=require("./treeCompare"),_=m("js-git/lib/modes"),b=m("shelljs"),w=m("fs");return function(t){p=t,p.checkout=e,p.resolveHash=a,p.loadCommit=l,p.loadBlob=u,p.loadTree=s}});