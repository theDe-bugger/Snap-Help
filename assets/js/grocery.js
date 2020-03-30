function background(){
	var cart = []
	localStorage.setItem("cart",JSON.stringify(cart))
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function searchgrocery(){
	var inputsearch = document.getElementById("search").value;
	var possibilities = [];
	for (i = 0; i <25; i++){
		x = i.toString()
		possibilities[i] = document.getElementById(x).innerHTML;
		if (inputsearch.toUpperCase() == possibilities[i].toUpperCase()){
			location.href = "https://mahtabmann2003.github.io/Snap-Help/groceries.html#" + x
		} 
	}
}

function addtocart(){
	var inputamount = document.getElementById("input0").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input0").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Potatoes",
		price: 0.5,
		quantity: inputamount,
		total: 0.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input0").value = ""
		alert("Please enter a number only")
	}
}
function removecart(){
	var name = "Potatoes"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart1(){
	var inputamount = document.getElementById("input1").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input1").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Onions",
		price: 0.6,
		quantity: inputamount,
		total: 0.6 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
	document.getElementById("input1").value = ""
	alert("Please enter a number only")
}
}
function removecart1(){
	var name = "Onions"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart2(){
	var inputamount = document.getElementById("input2").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input2").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Cucumbers",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input2").value = ""
		alert("Please enter a number only")
	}
}
function removecart2(){
	var name = "Cucumbers"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart3(){
	var inputamount = document.getElementById("input3").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input3").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push({
		name:"Lettuce",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input3").value = ""
		alert("Please enter a number only")
	}
}
function removecart3(){
	var name = "Lettuce"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart4(){
	var inputamount = document.getElementById("input4").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input4").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Garlic",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input4").value = ""
		alert("Please enter a number only")
	}
}
function removecart4(){
	var name = "Garlic"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart5(){
	var inputamount = document.getElementById("input5").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input5").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Saladmix",
		price: 4,
		quantity: inputamount,
		total: 4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input5").value = ""
		alert("Please enter a number only")
	}
}
function removecart5(){
	var name = "Saladmix"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart6(){
	var inputamount = document.getElementById("input6").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input6").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Apples",
		price: 1.2,
		quantity: inputamount,
		total: 1.2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input6").value = ""
		alert("Please enter a number only")
	}
}
function removecart6(){
	var name = "Apples"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart7(){
	var inputamount = document.getElementById("input7").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input7").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Oranges",
		price: 1.5,
		quantity: inputamount,
		total: 1.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input7").value = ""
		alert("Please enter a number only")
	}
}
function removecart7(){
	var name = "Oranges"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart8(){
	var inputamount = document.getElementById("input8").value
	var input = parseInt(inputamount)
	if (input > 10){
		document.getElementById("input8").value = ""
		alert("That is over the limit of 10, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Bananas",
		price: 0.55,
		quantity: inputamount,
		total: 0.55 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input8").value = ""
		alert("Please enter a number only")
	}
}
function removecart8(){
	var name = "Bananas"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart9(){
	var inputamount = document.getElementById("input9").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input9").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Lemons",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input9").value = ""
		alert("Please enter a number only")
	}
}
function removecart9(){
	var name = "Lemons"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}

function addtocart10(){
	var inputamount = document.getElementById("input10").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input10").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Milk",
		price: 4.5,
		quantity: inputamount,
		total: 4.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input10").value = ""
		alert("Please enter a number only")
	}
}
function removecart10(){
	var name = "Milk"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart11(){
	var inputamount = document.getElementById("input11").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input11").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Cheese",
		price: 5,
		quantity: inputamount,
		total: 5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input11").value = ""
		alert("Please enter a number only")
	}
}
function removecart11(){
	var name = "Cheese"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart12(){
	var inputamount = document.getElementById("input12").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input12").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Beans",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input12").value = ""
		alert("Please enter a number only")
	}
}
function removecart12(){
	var name = "Beans"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart13(){
	var inputamount = document.getElementById("input13").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input13").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Mac N' Cheese",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input13").value = ""
		alert("Please enter a number only")
	}
}
function removecart13(){
	var name = "Mac N' Cheese"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart14(){
	var inputamount = document.getElementById("input14").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input14").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Noodles",
		price: 0.4,
		quantity: inputamount,
		total: 0.4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input14").value = ""
		alert("Please enter a number only")
	}
}
function removecart14(){
	var name = "Noodles"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart15(){
	var inputamount = document.getElementById("input15").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input15").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Pasta",
		price: 2,
		quantity: inputamount,
		total: 2 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input15").value = ""
		alert("Please enter a number only")
	}
}
function removecart15(){
	var name = "Pasta"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart16(){
	var inputamount = document.getElementById("input16").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input16").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Rice",
		price: 5,
		quantity: inputamount,
		total: 5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input16").value = ""
		alert("Please enter a number only")
	}
}
function removecart16(){
	var name = "Rice"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart17(){
	var inputamount = document.getElementById("input17").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input17").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Toiletpaper",
		price: 12,
		quantity: inputamount,
		total: 12 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input17").value = ""
		alert("Please enter a number only")
	}
}
function removecart17(){
	var name = "Toiletpaper"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart18(){
	var inputamount = document.getElementById("input18").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input18").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Handsoap",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input18").value = ""
		alert("Please enter a number only")
	}
}
function removecart18(){
	var name = "Handsoap"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart19(){
	var inputamount = document.getElementById("input19").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input19").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Sanitizer",
		price: 10,
		quantity: inputamount,
		total: 10 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input19").value = ""
		alert("Please enter a number only")
	}
}
function removecart19(){
	var name = "Sanitizer"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart20(){
	var inputamount = document.getElementById("input20").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input20").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Toothpaste",
		price: 1.5,
		quantity: inputamount,
		total: 1.5 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input20").value = ""
		alert("Please enter a number only")
	}
}
function removecart20(){
	var name = "Toothpaste"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart21(){
	var inputamount = document.getElementById("input21").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input21").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Bodysoap",
		price: 4,
		quantity: inputamount,
		total: 4 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input21").value = ""
		alert("Please enter a number only")
	}

}
function removecart21(){
	var name = "Bodysoap"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart22(){
	var inputamount = document.getElementById("input22").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input22").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Spoons and Forks",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input22").value = ""
		alert("Please enter a number only")
	}
}
function removecart22(){
	var name = "Spoons and Forks"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart23(){
	var inputamount = document.getElementById("input23").value
	var input = parseInt(inputamount)
	if (input > 5){
		document.getElementById("input23").value = ""
		alert("That is over the limit of 5, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Paperplates",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input23").value = ""
		alert("Please enter a number only")
	}
}
function removecart23(){
	var name = "Paperplates"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i< cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function addtocart24(){
	var inputamount = document.getElementById("input24").value
	var input = parseInt(inputamount)
	if (input > 3){
		document.getElementById("input24").value = ""
		alert("That is over the limit of 3, please type a smaller amount")
	}
	else if (Number.isInteger(parseInt(inputamount))){
	var cart = JSON.parse(localStorage.getItem("cart"))
	cart.push( {
		name:"Water Bottle Pack",
		price: 3,
		quantity: inputamount,
		total: 3 * parseFloat(inputamount)
	})
	localStorage.setItem("cart",JSON.stringify(cart))
	}else{
		document.getElementById("input24").value = ""
		alert("Please enter a number only")
	}
}
function removecart24(){
	var name = "Water Bottle Pack"
	var cart = JSON.parse(localStorage.getItem("cart"))
	for (i = 0; i < cart.length;i++){
		if (cart[i].name == name){
			cart.splice(i)
		}
	}
	localStorage.setItem("cart",JSON.stringify(cart))
}
function checkout(){
	document.getElementById("myForm").style.display = "block"
	var cart = JSON.parse(localStorage.getItem("cart"))
	var total = 0
	for (i = 0; i<cart.length;i++){
		var name = cart[i].name
		var quantity = cart[i].quantity
		var price = cart[i].price
		var textholder = name + " x " + parseFloat(quantity) + " x $" + parseFloat(price).toFixed(2)
		var p = document.createElement("p");
		var node = document.createTextNode(textholder);
		p.appendChild(node);
		var div = document.getElementById("listing");
		div.appendChild(p);
		total += cart[i].total
	}
	var subtotal = "Subtotal: $" + parseFloat(total).toFixed(2)
	var taxes = "Taxes (13%): $" + (parseFloat(total)*0.13).toFixed(2)
	var total = "Total: $" + (parseFloat(total)*1.13).toFixed(2)
	var p = document.createElement("p");
	var node = document.createTextNode(subtotal);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
	var p = document.createElement("p");
	var node = document.createTextNode(taxes);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
	var p = document.createElement("p");
	var node = document.createTextNode(total);
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
	var p = document.createElement("p");
	var node = document.createTextNode("---------------------------------------------------------");
	p.appendChild(node);
	var div = document.getElementById("listing");
	div.appendChild(p);
}

function formValidationTwo () {
	if ((document.getElementById("checkname").value == "") || (document.getElementById("checkemail").value =="")||(document.getElementById("checkaddress").value == "") || (document.getElementById("checkcity").value =="")||(document.getElementById("checkstate").value == "") || (document.getElementById("checkzip").value =="")||(document.getElementById("checkcardname").value == "") || (document.getElementById("checkcardnum").value =="")||(document.getElementById("checkexpmonth").value == "") || (document.getElementById("checkexyear").value =="") || (document.getElementById("checkcvv").value =="")){
		alert("All Information Must Be Filled Out");
		return false;
	}else {
		alert("Payment was successful");
		var cart = localStorage.getItem("cart")
		var cart = []
		localStorage.setItem("cart",JSON.stringify(cart))
	}
}
