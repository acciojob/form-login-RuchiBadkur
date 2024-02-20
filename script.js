
function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
	cont fname = document.querySelector("input[name='fname']").value;
	cont lname = document.querySelector("input[name='lname']").value;
	(!fname || !lname)
		? alert("please enter both fields")
		:alert(fname + " " + lname);
}
