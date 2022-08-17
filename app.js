//class for holding cars
let nextId = 0;

let next_index = -1;
class Car{
   #id //private
   name;
   color;
   year;
   liecence_number = 0;
   price;
   image;

   constructor(name, color, year, liecence_number, price, image){
    this.#id = nextId + 1; // give static number to car ++1
    this.name = name;
    this.color = color;
    this.year  = year;
    this.liecence_number = liecence_number;
    this.price = price;
    this.image = image;

   }


   getId() {
      return this.#id;     
   }


}

let cars = []; // list of cars
//function, adds new car to list
function addCar(name, color, year, liecence_number, price, image){
      next_index = next_index + 1;
      cars.push(new Car(name, color, year, liecence_number, price, image));
      

}

// receive input from user
let  creatCar =  function(){

   // link to page fields
   let name = $('#name');
   let color = $('#color');
   let year = $('#year');
   let liecence_number = $('#liecence_number');
   let price = $('#price');
   let image = $('#imageLink');

   // adding new car, by details from user
   addCar(name.val(), color.val(), year.val(), liecence_number.val(), price.val(), image.val());

   // clean page fields
   name.val("");
   color.val("");
   year.val("");
   liecence_number.val("");
   price.val("");
   image.val("");

   showCar(cars.length - 1)
}

//function, delete car
function deleteCar(id){
   if(cars.length > 0)
   for(let i = 0; i < cars.length; i++){ // ()
      if(cars[i].getId == id ){
        cars.slice(index,index); // slice the list from index, 
      }
   }
}


//next car show function
let next = function(){
   if(nextId >= 0)
   if(next_index > cars.length - 1){
      next_index = 0;
   }

   showCar(next_index);
   next_index = next_index + 1;
}

//beck car show function
let back = function(){
   if(next_index == 0){
      next_index = cars.length;
   }
 
  
   next_index = next_index - 1;
   console.log(next_index);
   showCar(next_index);
   
}


//show car regarding its location in array
let showCar =  function(location){

   
   if(cars.length > 0) // check if list contain cars
   if(cars.length > location){
     
      let div_table = $('#existCars');
      let table = $('#table');

      //delete all previos already 	shown cars
      let table2 = $('#table tr:gt(0)');
      table2.remove();


      
      let tr = document.createElement("tr");
 
      tr.insertCell().innerHTML  = cars[location].name;
      tr.insertCell().innerHTML = cars[location].color;
      tr.insertCell().innerHTML = cars[location].year;
      tr.insertCell().innerHTML= cars[location].liecence_number;
      tr.insertCell().innerHTML = cars[location].price;
      
      let img =  document.createElement('img'); 
      img.src = cars[location].image;
      let cell =  tr.insertCell(); // creat table field, we will connect img obj to it
     //append image to tr element
      cell.append(img);
      table.append(tr);

      div_table.css({'display':'block'});


   }
}