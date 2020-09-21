const mongo = require('../index.js');
const config = {
	DB_URI: process.env.DB__URI,
	DB_NAME: "furlenco"
};

let db = null;

mongo(config.DB_URI, config.DB_NAME, {
		auth: {
			user: process.env.DB__USER,
			password: process.env.DB__PASS
		}
	})
	.then((DB) => {
		db = DB;
		return db.read('devices', {}, 'all');
		console.log(db.is_connected());
		// return db.close();
	})
	.then((r) => {
		console.log(r);
		console.log(db.is_connected());
		// console.log(db);
		return db.close();
		// setInterval(() => {
		// }, 10);
	})
	.then((r) => {
		console.log(r);
	})
	.catch((e) => {
		console.error(e);
	});