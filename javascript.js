var d = new Date();
var receipts = [{Seller: "amazon", Date: new Date(2020,9,5), Price: 95},
                {Seller: "amazon", Date: new Date(2020,8,9), Price: 90},
                {Seller: "target", Date: new Date(2019,11,5), Price: 95}];
function dateCompare(buttonPressed){
  var c = new Date();
  switch(buttonPressed){
    case "w":
    c.setDate(c.getDate() - 7);
    break;
    case "m":
    c.setMonth(c.getMonth()-1);
    break;
    case "y":
    c.setYear(c.getYear() - 1);
    break;
    default:
    c.setYear(c.getYear() - 50);
  }
  console.log(receipts.length);
    var array = [];
    var i;
    for(i = 0; i < receipts.length; i++){
      if(receipts[i].Date > c){
        array.push(receipts[i]);
      }
    }
    document.getElementById("test").innerHTML = convertToString(array);
}
function searchText(){
  var j;
  var array = [];
  var word = document.getElementById("searcht").value;
  for(j = 0; j < receipts.length; j++){
    if(receipts[j].Seller.includes(word)){
      array.push(receipts[j]);
    }
  }
  document.getElementById("test").innerHTML = convertToString(array);
}
function convertToString(arr){
  var result = "";
  var k;
  for(k = 0; k < arr.length; k++){
    result = result + arr[k]["Seller"] + " " + arr[k]["Price"] + " " + arr[k]["Date"] + " <span>";
  }
  return result;
}
