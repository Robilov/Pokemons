pokemons.forEach(function (pokemon) {
	var newLiItem = createElement('li', 'list-item',);
	var newImg = createElement('img', 'img img-fluid');
	newImg.src = pokemon.img;

	var newLiName = createElement('p', 'item-name', pokemon.name);
	var newLiType = createElement('p', 'item-span', pokemon.type);

	elList.appendChild(newLiItem);

	newLiItem.appendChild(newImg);
	newLiItem.appendChild(newLiName);
	newLiItem.appendChild(newLiType);

});