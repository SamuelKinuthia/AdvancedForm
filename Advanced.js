function validateForm() {
const name = document.myForm.name.value;
const pass = document.myForm.pwd.value;
const pass2 = document.myForm.pwd2.value;

if (name == "" || name == null){
	alert("Name cannot be empty");
	return false;
}
if (pass == "" || pass2 == ""){
	alert("Passwords cannot be blank");
	return false;
}
else if(pass == pass2){
	return true;
}
else{
	alert("Passwords do not match");
	return false;
}
}