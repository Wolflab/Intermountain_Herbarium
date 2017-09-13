const request = require('request-promise');  

// const config = require('../config.json');

//Headbox 412065968905812
//Herbarium 185929428100141

const options = {
	method: 'GET',
	uri: 'https://graph.facebook.com/v2.10/412065968905812/likes',
	// uri: 'https://graph.facebook.com/v2.10/me/accounts',
	qs: {
		access_token: '1945210372414793|22zJix-bMIs5fCJum-r8fmlvw80'
		// q: queryTerm,
		// type: searchType,
		// fields: searchType === 'page' ? pageFieldSet : userFieldSet
	}
  };

var test = async function(){
	var res = await request(options)
	console.log(res);
}
//}();