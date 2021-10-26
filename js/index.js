fetch('https://api.punkapi.com/v2/beers/12')
  .then((res) => res.json())
  .then((beers) => console.log(beers));
