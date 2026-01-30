const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll('.price');
	let total = 0;
	price.forEach(price=>total+= Number(price.innerText));

    let table = document.querySelector('table');
	let rownew = document.createElement('tr');
	
	let newcell = document.createElement('td');

	newcell.colSpan =2;
	newcell.innerText= "Total" +total;
	rownew.appendChild(newcell);
	table.appendChild(rownew)
	
  
};

getSumBtn.addEventListener("click", getSum);

