
var button = document.getElementById("submit-button");

button.addEventListener("click", function(event){
  event.preventDefault();
  var madlib = createMadLib();
  template(madlib);
});

function createMadLib() {
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var adjective1 = document.getElementById("adjective1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var pluralNoun1 = document.getElementById("pluralNoun1").value;
  var pluralNoun2 = document.getElementById("pluralNoun2").value;
  var game = document.getElementById("game").value;

  var madlib = `A coffee is much needed when you wake up <strong> ${adjective1}</strong> with your <strong> ${adjective2} </strong> fuzzy brain.<br/> Usually, you go to some place
  that is a/an cozy <strong> ${noun1} </strong> or a/an familiar <strong> ${noun2} </strong> spot.<br/>
  A good coffee flavour is one where you taste the beans, <strong> ${pluralNoun1} </strong>
  and <strong> ${game} </strong> or at the very least tickle the senses with <strong> ${pluralNoun2} </strong>.`;

  return madlib;
}

function template(madlib) {
  document.getElementById("madlibContainer").innerHTML = madlib;
}
