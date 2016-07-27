webpackJsonp([2,0],{0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}var l=t(51),a=o(l),i=t(49),r=o(i),s=t(48),d=o(s);a["default"].use(r["default"]),new a["default"]({el:"body",components:{SampleApp:d["default"]}})},1:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var l=t(12),a=o(l);e["default"]={name:"FileUpload",data:function(){return{draggingOver:!1,uploadingFiles:[]}},computed:{computedClasses:function(){var n={};return n[this.draggingClass]=this.draggingOver,n},canDragAndDrop:function(){var n=document.createElement("div");return"draggable"in n||"ondragstart"in n&&"ondrop"in n}},props:{files:{twoWay:!0},dragOverMethod:{type:Function},draggingClass:{type:String,"default":"dragging-over"},filesHandler:{type:Function,"default":function(n){return this.defaultFilesHandler(n)}},fileHandler:{type:Function,"default":function(n){return this.defaultFileHandler(n)}},fileCompleteHandler:{type:Function,"default":function(n,e){return this.defaultFileCompleteHandler(n,e)}},filesCompleteHandler:{type:Function,"default":function(n){return this.defaultFilesCompleteHandler(n)}},progressHandler:{type:Function,"default":function(n,e){return this.defaultProgressHandler(n,e)}},fileFailedHandler:{type:Function,"default":function(n,e){return this.defaultFileFailedHandler(n,e)}},uploadEndpoint:{type:String},uploadOptions:{type:Object,"default":function(){return{}}},buttonText:{type:String,"default":"Upload File"},fileKey:{type:String},debug:{type:Boolean,"default":!1}},methods:{startDrag:function(){this.canDragAndDrop&&(this.draggingOver=!0)},stopDrag:function(){this.canDragAndDrop&&(this.draggingOver=!1)},chooseFiles:function(){this.$els.fileInput.click()},handleDrop:function(n){this.stopDrag(),this.uploadingFiles=[];var e=n.dataTransfer.files;this.$els.fileInput.files=e},handleFiles:function(n){var e=n.target.files;this.filesHandler(e)},defaultFilesHandler:function(n){var e=this;this.debug&&console.log("defaultFilesHandler",n);for(var t=0;t<n.length;t++)!function(n){e.fileHandler(n).then(function(t){e.fileCompleteHandler(t,n)})["catch"](function(t){e.fileFailedHandler(t,n)})}(n[t])},defaultFileHandler:function(n){var e=this;if("undefined"!=typeof this.$http){this.debug&&console.log("defaultFileHandler (using vue-resource)",n);var t=new window.FormData;t.append(this.fileKey,n);var o=(0,a["default"])(this.uploadOptions,{progress:function(t){e.progressHandler(t,n)}});return console.log(o),this.uploadingFiles.push({name:n.name,progress:{loaded:0,total:n.size,status:"incomplete"}}),this.$http.post(this.uploadEndpoint,t,o)}this.debug&&console.log("defaultFileHandler (no vue-resource)",n)},defaultProgressHandler:function(n,e){this.debug&&console.log("defaultProgressHandler",n);var t=this.uploadingFiles.find(function(n){return n.name===e.name});t.progress.loaded=n.loaded,t.progress.total=n.total},defaultFileCompleteHandler:function(n,e){this.debug&&console.log("defaultFileCompleteHandler",n),this.uploadingFiles.find(function(n){return n.name===e.name}).progress.status="complete",0===this.uploadingFiles.filter(function(n){return"complete"!==n.progress.status}).length&&this.filesCompleteHandler()},defaultFilesCompleteHandler:function(n){this.debug&&console.log("defaultFilesCompleteHandler",n)},defaultFileFailedHandler:function(n,e){this.debug&&console.log("defaultFileFailedHandler",n),this.uploadingFiles.find(function(n){return n.name===e.name}).progress.status="error"}}}},6:function(n,e,t){e=n.exports=t(7)(),e.push([n.id,"input[type=file][_v-f1402e64]{display:none}","",{version:3,sources:["/./src/components/FileUpload.vue"],names:[],mappings:"AA4MA,8BACE,YAAc,CACf",file:"FileUpload.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ninput[type=file][_v-f1402e64] {\n  display: none;\n}\n"],sourceRoot:"webpack://"}])},8:function(n,e){n.exports=' <div class=file-upload :class=computedClasses @drag.stop.prevent="" @dragover.stop.prevent="" @dragstart.stop.prevent=startDrag @dragenter.stop.prevent=startDrag @dragend.stop.prevent=stopDrag @dragleave.stop.prevent=stopDrag @drop.stop.prevent=handleDrop @click=chooseFiles _v-f1402e64=""> <input v-el:file-input="" type=file v-model=files @change=handleFiles _v-f1402e64=""> <button v-show="uploadingFiles.length === 0" v-text=buttonText _v-f1402e64=""></button> <div class=uploading-files _v-f1402e64=""> <div class=uploading-file v-for="file in uploadingFiles" :class="{\n        incomplete: file.progress.status === \'incomplete\',\n        complete: file.progress.status === \'complete\',\n        error: file.progress.status === \'error\'\n      }" _v-f1402e64=""> <span class=name v-text=file.name _v-f1402e64=""></span> <progress :value=file.progress.loaded :max=file.progress.total _v-f1402e64=""></progress> </div> </div> </div> '},9:function(n,e,t){var o,l;t(11),o=t(1),l=t(8),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),l&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=l)},11:function(n,e,t){var o=t(6);"string"==typeof o&&(o=[[n.id,o,""]]);t(10)(o,{});o.locals&&(n.exports=o.locals)},18:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(e,"__esModule",{value:!0});var l=t(9),a=o(l);e["default"]={data:function(){return{uploadOptions:{headers:{Authorization:"Client-ID YOURIMGURIDHERE"}}}},components:{FileUpload:a["default"]}}},46:function(n,e,t){e=n.exports=t(7)(),e.push([n.id,"#app{font-family:sans-serif;max-width:40em;margin:auto;display:block;color:#33383d}.my-uploader{text-align:center;background:#eee;border:3px dashed #888;padding:2em;border-radius:.5em}.my-uploader.dragging-over{background:#ff0}.my-uploader .uploading-file{position:relative;text-align:center}.my-uploader .uploading-file progress{display:block;width:100%;margin:auto}.my-uploader .uploading-file .name:after{font-style:italic;opacity:.5}.my-uploader .uploading-file.incomplete .name:after{content:' (incomplete)'}.my-uploader .uploading-file.complete .name:after{content:' (complete)'}.my-uploader .uploading-file.error .name:after{content:' (error)'}","",{version:3,sources:["/./src/SampleApp.vue"],names:[],mappings:"AAgCA,KACE,uBAAwB,AACxB,eAAgB,AAChB,YAAa,AACb,cAAe,AACf,aAAe,CAChB,AACD,aACE,kBAAmB,AACnB,gBAAiB,AACjB,uBAAwB,AACxB,YAAa,AACb,kBAAqB,CACtB,AACD,2BACE,eAAmB,CACpB,AACD,6BACE,kBAAmB,AACnB,iBAAmB,CACpB,AACD,sCACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd,AACD,yCACE,kBAAmB,AACnB,UAAa,CACd,AACD,oDACE,uBAAyB,CAC1B,AACD,kDACE,qBAAuB,CACxB,AACD,+CACE,kBAAoB,CACrB",file:"SampleApp.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#app {\n  font-family: sans-serif;\n  max-width: 40em;\n  margin: auto;\n  display: block;\n  color: #33383D;\n}\n.my-uploader {\n  text-align: center;\n  background: #eee;\n  border: 3px dashed #888;\n  padding: 2em;\n  border-radius: 0.5em;\n}\n.my-uploader.dragging-over {\n  background: yellow;\n}\n.my-uploader .uploading-file {\n  position: relative;\n  text-align: center;\n}\n.my-uploader .uploading-file progress {\n  display: block;\n  width: 100%;\n  margin: auto;\n}\n.my-uploader .uploading-file .name:after {\n  font-style: italic;\n  opacity: 0.5;\n}\n.my-uploader .uploading-file.incomplete .name:after {\n  content: ' (incomplete)';\n}\n.my-uploader .uploading-file.complete .name:after {\n  content: ' (complete)';\n}\n.my-uploader .uploading-file.error .name:after {\n  content: ' (error)';\n}\n"],sourceRoot:"webpack://"}])},47:function(n,e){n.exports=" <div id=app> <h1>Upload your files here.</h1> <file-upload :debug=true :upload-options=uploadOptions upload-endpoint=https://api.imgur.com/3/image file-key=image class=my-uploader></file-upload> </div> "},48:function(n,e,t){var o,l;t(50),o=t(18),l=t(47),n.exports=o||{},n.exports.__esModule&&(n.exports=n.exports["default"]),l&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=l)},50:function(n,e,t){var o=t(46);"string"==typeof o&&(o=[[n.id,o,""]]);t(10)(o,{});o.locals&&(n.exports=o.locals)}});
//# sourceMappingURL=sampleApp.js.map