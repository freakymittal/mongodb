const mongo = require('../index.js');
const config = {
	DB_URI: 'mongodb+srv://cluster0-zhjde.mongodb.net',
	DB_NAME: "furlenco"
};

let db = null;

mongo(config.DB_URI, config.DB_NAME, {
		auth: {
			user: "intugine",
			password: "NkVPR6VQUEXhyUwYHgQg4hjHspDH5k9a"
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