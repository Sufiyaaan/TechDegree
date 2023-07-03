var firstname = prompt('What is your first name?');
var lastname = prompt('What is your last name?');

var completeName = firstname.toUpperCase() +  ' ' + lastname.toUpperCase();

var cCount = completeName.length;

alert("the string: \"" + completeName + "\" is " + cCount + " characters long.")