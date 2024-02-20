
function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
	const fname = document.querySelector('input[name="fname"]').value;
	const lname = document.querySelector('input[name="lname"]').value;
	(fname || lname)
		?alert(fname + " " + lname): ;
}
