return [
	document.querySelector("meta[property='og:url']").content,
	document.querySelector("meta[property='og:title']").content,
	(function getVideoExpireDate() {
		var i = document.querySelectorAll("#ta-videoinfo .playMetaText")[0].querySelectorAll("span")[1].innerText.split(" ").slice(2,5);
		var d = new Date(0);
		d.setUTCFullYear(i[2]);
		d.setUTCDate(i[0]);
		d.setUTCMonth( monthNumber[ i[1] ] );
		d.setUTCHours(0);
		d.setUTCMinutes(0);
		d.setUTCSecondes(0);
		d.setUTCMilliseconds(0);

		return d.getTime() / 1000;
		function getMonthNumber(month) {
			month = month.toLocaleLowerCase().substr(0, 3);
			var tr = {
				"jan": 0,
				"feb": 1,
				"mar": 2,
				"apr": 3,
				"maj": 4,
				"jun": 5,
				"jul": 6,
				"aug": 7,
				"sep": 8,
				"okt": 9,
				"nov": 10,
				"dec": 11
			};
			return tr.hasOwnProperty(month) ? tr[month] : 0;
		};
	})()
]


