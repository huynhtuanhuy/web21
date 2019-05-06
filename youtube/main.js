$(document).ready(function() {
	let pageToken;
	let enableLoad = true;

	$('#search').on("submit", function(event) {
		event.preventDefault();
		
		const key = $("#keyword").val();

		// $("#result-list").html('');
		// $("#result-list").empty();
		$.ajax({
			url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${key}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
			type:"GET",
			success: function(data) {
				const { items, nextPageToken } = data;

				pageToken = nextPageToken;

				// items.forEach((item, index) => {
				// 	console.log(item);
				// 	$("#result-list").append(`
				// 		<div>
				// 			<img src="${item.snippet.thumbnails.high.url}" />
				// 			<div>${item.snippet.title}</div>
				// 		</div>
				// 	`);
				// });

				// forEach, map, filter, reduce
				const results = items.map(function(item) {
					return `
						<div>
							<img src="${item.snippet.thumbnails.high.url}" />
							<div>${item.snippet.title}</div>
						</div>
					`;
				});
				$("#result-list").html(results.join(""));
			},
			error: function(error) {
				console.log(error)
			}
		});
	});

	$(window).on("scroll", function() {
		const documentHeight = $(document).height();
		const windowHeight = $(window).height();
		const windowScrollTop = $(window).scrollTop();
		
		if (enableLoad && pageToken && documentHeight - (windowHeight + windowScrollTop) < 400) {
			console.log(pageToken);
			enableLoad = false;
			const key = $("#keyword").val();

			$.ajax({
				url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${key}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${pageToken}`,
				type:"GET",
				success: function(data) {
					const { items, nextPageToken } = data;
	
					pageToken = nextPageToken;

					const results = items.map(function(item) {
						return `
							<div>
								<img src="${item.snippet.thumbnails.high.url}" />
								<div>${item.snippet.title}</div>
							</div>
						`;
					});
					$("#result-list").append(results.join(""));
					enableLoad = true;
				},
				error: function(error) {
					console.log(error)
				}
			});
		}
	});
});