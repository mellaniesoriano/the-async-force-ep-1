
(function(){

  function getElements(id, objVal) {
    var getElement = document.getElementById(id);
    getElement.innerHTML = objVal;
  }

  function darthVader(func) {
    var response = JSON.parse(this.responseText);
    console.log(response);

    getElements('person4Name', response.name);
    getElements('person4HomeWorld', response.species);
  }

  function hanSolo(func) {
    var response = JSON.parse(this.responseText);
    console.log(response);

    getElements('person14Name', response.name);
    getElements('person14Species', response.species);
  }

  function getFilmList(func) {
    var response = JSON.parse(this.responseText);
    var displayFilmList = document.getElementById('filmList');
    console.log(response.results);

    function makeList(type, className, content, appendTarget) {
      var newElement = document.createElement(type);
      newElement.className = className;
      newElement.innerHTML = content;
      appendTarget.appendChild(newElement);
    }

    for ( var i = 0; i < response.results.length; i++ ) {
      var createList = document.createElement('li');
      createList.className = 'film';
      displayFilmList.appendChild(createList);

      makeList('h2', 'title', response.results[i].title, createList);


    }

  }

  function createRequest(url, func) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', func);
    oReq.open('GET', url);
    oReq.send();
  }


createRequest('http://swapi.co/api/people/4/', darthVader);
createRequest('http://swapi.co/api/people/14/', hanSolo);
createRequest('http://swapi.co/api/films/', getFilmList);

})();