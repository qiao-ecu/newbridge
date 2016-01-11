define(function(){function e(){this.valueIndex=[],this.aliasIndex={},this.textIndex={};for(var e=0;e<arguments.length;e++){var t=arguments[e];if(null==t.value)t.value=e;this.addElement(t)}}return e.prototype.addElement=function(e){if(this.hasOwnProperty(e.value))throw new Error("Already defined an element with value"+e.value+" in this enum type");if(this.hasOwnProperty(e.alias))throw new Error('Already defined an element with alias "'+e.alias+'" in this enum type');this[e.value]=e.alias,this[e.alias]=e.value,this.valueIndex[e.value]=e,this.aliasIndex[e.alias]=e,this.textIndex[e.text]=e},e.prototype.fromValue=function(e){return this.valueIndex[e]},e.prototype.fromAlias=function(e){return this.aliasIndex[e]},e.prototype.fromText=function(e){return this.textIndex[e]},e.prototype.getTextFromValue=function(e){return this.fromValue(e).text},e.prototype.getTextFromAlias=function(e){return this.fromAlias(e).text},e.prototype.getValueFromAlias=function(e){return this.fromAlias(e).value},e.prototype.getValueFromText=function(e){return this.fromText(e).value},e.prototype.getAliasFromValue=function(e){return this.fromValue(e).alias},e.prototype.getAliasFromText=function(e){return this.fromText(e).alias},e.prototype.toArray=function(){var e=[];if(arguments.length>0)for(var t=0;t<arguments.length;t++){var n=arguments[t];if("string"==typeof n)e.push(this.fromAlias(n));else e.push(n)}else for(var t=0;t<this.valueIndex.length;t++)if(this.valueIndex[t])e.push(this.valueIndex[t]);return e},e});