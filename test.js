const request = require('request-promise');

var loginPage = "http://intermountainbiota.org/portal/profile/index.php";
var url = "http://intermountainbiota.org/portal/collections/misc/collprofiles.php?collid=16";

zhuLiDoTheThing = async function(){
	request.jar();
	var response = await request.post(
		loginPage,
		{

		}
	);
	console.log(response);
}();

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
  
// 	await page.goto(loginPage);
// 	await page.screenshot({
// 		path: 'login-page.png',
// 		fullPage: true
// 	});
// 	await page.focus('.login');
// 	await page.type('paulwolf', {delay: 200});
// 	await page.focus('.password');
// 	await page.type('spunspun11', {delay: 200});
// 	// await page.click('')
// 	const loginForm = await page.$('#loginForm');
// 	await loginForm.evaluate(loginForm => loginForm.submit());
// 	await page.screenshot({
// 		path: 'login-page.png',
// 		fullPage: true
// 	});
// 	browser.close();
//   })();