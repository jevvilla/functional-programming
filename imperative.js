let newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		];


let getIdAndUrlUsingFor = (movies) => {
	let arrayResult = [];
	for(let i = 0; i < movies.length; i++){
		arrayResult.push({
			id: movies[i].id,
			url: movies[i].uri
		});
	}

	return arrayResult;
}
console.log(getIdAndUrlUsingFor(newReleases))


/**
 * Output:
 * [ { id: 70111470,
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470' },
  { id: 654356453,
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470' },
  { id: 65432445,
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470' },
  { id: 675465,
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470' } ]
 */

