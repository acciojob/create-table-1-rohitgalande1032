function insert_Row() {
    //Write your code here
	let sampleTable = document.getElementById("sampleTable");

	let newRow = sampleTable.insertRow(0);

	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);

	newCell1.innerHTML = "New Cell1";
	newCell2.innerHTML= "New Cell2";
}
