const hashes = {
	adminHash: "994831f16967b74f5bb5a032b6a8b7f6",
	userHash: "3e2829ca9c52415e5d54578eac955181"
}

exports.login = function(hash){
	return new Promise(function(resolve, reject){
		if(hash == hashes.adminHash){
			resolve({
				key: process.env.adminKey,
				reportAuth: true,
				serviceAuth: true,
				usageAuth: true
			});
		}else if(hash == hashes.userHash){
			resolve({
				key: process.env.userKey,
				reportAuth: false,
				serviceAuth: true,
				usageAuth: true
			});
		}else{
			resolve(false);
		}
	});
}
