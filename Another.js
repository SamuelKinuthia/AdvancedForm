function validateForm() {

const name = document.myForm.name.value;
const password = document.myForm.pwd.value;

if (name == "" || name == null) {
	alert("Name is required");
	return false;
}
if(password==""){
	alert("password is a must!!")
	return false;
}
else if(password.length<8) {
	alert("Password must be more than 8 characters");
	return false;
}

}
