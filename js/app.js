
(function(){

  // var getPerson4HomeWorld = document.getElementById('person4HomeWorld');
  // var p14Name = document.getElementById('person14Name');
  // var p14Species = document.getElementById('person14Species');


  function getElements(id, objProperty) {
    var getElement = document.getElementById(id);
    getElement.innerHTML = objProperty;
  }

  function reqListener(func) {
    var response = JSON.parse(this.responseText);
    console.log(response);

    getElements('person4Name', response.name);
    getElements('person4HomeWorld', response.species);
  }

  function getPerson(id, func) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', func);
    oReq.open('GET', `http://www.swapi.co/api/people/${id}`);
    oReq.send();
  }


getPerson(4, reqListener);
// getPerson(14, reqListener2);

})();