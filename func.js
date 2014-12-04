function uploadPhoto(fileURI, id, type) {
	var win = function (r) {
		clearCache();
		retries = 0;
		alert('Done!');
	}

	var fail = function (error) {
		if (retries == 0) {
			retries ++
			setTimeout(function() {
				uploadPhoto(fileURI)
			}, 1000)
		} else {
			retries = 0;
			clearCache();
			alert('Ups. Something wrong happens!');
		}
	}
 
	var options = new FileUploadOptions();
	options.fileKey = "file";
	options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
	options.mimeType = "image/png";
	options.params = {}; // if we need to send parameters to the server request
	var ft = new FileTransfer();
	var res = "";
	ft.upload(fileURI, encodeURI("http://59.124.220.39:8181/SP_WS/Fileupload.ashx?FolderUrl=" + id + "type=" + type), 
		function(){
			alert("上傳成功");
		}, 
		function(error){
			alert("上傳失敗:" + error.code);
		},
	options);
	
}