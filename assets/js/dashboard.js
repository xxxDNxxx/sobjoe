
		var MONTHS = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
		var config = {
			type: 'line',
			data: {
				labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม'],
				datasets: [{
					label: 'รายได้ในเดือนนี้',
					backgroundColor: '#6d6b6b',
					borderColor:'#6d6b6b',
					data: [
						5,
						13,
						60,
						20,
						35,
						23,
						40
					],
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'รายได้'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'เดือน'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'จำนวนเงิน (บาท)'
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('chart').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

		
		