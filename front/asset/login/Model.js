define(function(require,exports,module){function e(){if(n.apply(this,arguments),this.db=new r("newbridge",localStorage),this.db.isNew())this.db.createTable("loginUserInfo",["username","password","serviceid","status","remenber","autologin","eid","logintime"]),this.db.commit()}var t=require("er/util"),n=require("ef/UIModel"),i=(require("er/datasource"),require("underscore")),r=require("common/util/localStorageDB");return e.prototype.prepare=function(){var e=this.db.queryAll("loginUserInfo",{sort:[["logintime","DESC"]]});this.set("userInfo",e);var t=i.map(e,function(e){return{text:e.username}});this.set("usernames",t),n.prototype.prepare.apply(this,arguments)},t.inherits(e,n),e});