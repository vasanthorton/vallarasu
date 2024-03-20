import { NoopAnimationPlayer } from '@angular/animations';
import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { every, throwIfEmpty } from 'rxjs';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {

  @ViewChild('view3', { static: true }) view3!: ElementRef;

  myvariables = "gopal";
  email: any;
  myflot = "42";
  myarray = [];
  mycard = 42.34568778;
  i: any;
  j: any;
  myNUmber: any;


  gameStarted = false;
  playerChoice = '';
  showResult = false;
  result = '';
  resultMessage = '';
  myclass = new MyClass()

  specialpizzaa = new specialpizza()

   pizzaa = new  pizzafun("otha****")

   vasanth = new StudentData("hello", "kdsfj",54);
  kavin = new StudentData("kavin ","dlfksja", 80);
  totalstudets: any;

  
 
 
  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
   
    this.myclass.myMethod()

    this.kavin.students();
    //  this.demo();

   

     this.pizzaa.demofun();
    
     this.specialpizzaa.slice();
     


     const jsonfun={
      name:"vasanth",
      array:["kuamr","surya","ranjith"]
    
    }

    const fun =JSON.stringify(jsonfun)

    console.log("json functionn ===>"+fun);
    

    const repeat =JSON.parse(fun)

    console.log("repest to the objects "+repeat);
    
   
    
    
    
    



    // this.kavin.totalstudets="vasanth"
    

// 

    // let person = "John Doe";
    // let demoTag = document.getElementById("demo") as HTMLElement;
    // demoTag.innerHTML = person;



    // console.log(Math.round (77.7));



    //  let myNUmber =10;

    //   let sapnner=false;
    // 	let myname="";

    // 	let view;

    // 	if(sapnner){
    // 		view="sorry bruh"
    // 	}

    // else if(myname){
    // 		view =`view ${myname}`
    // 	}
    // 	else{
    // 		view=`i am working`
    // 	}
    // 	console.log(view);




    // 	var num = "6"

    // 	switch (Math.floor(Math.random()*3)) {
    //     case 1:
    //         console.log("stone");
    //         break;

    //     case 2:
    //         console.log("papper");
    //         break;
    // 		case 3:
    //         console.log("kavin");
    //         break;

    //     default:
    //         console.log("not working");

    // }




    // switch cases----------------

    // let player = "paper"
    // let computer = "scisser"

    // switch(player){
    // 	case computer:
    //         console.log("tie");
    // 				break;

    // 				case player :
    // 					if(computer === "scisser"){
    // 						console.log("computer wins");

    // 					}
    // 					else{
    // 						console.log("player wins");

    // 					}
    // 					break;



    // }


    // const age =16;

    // const averageage = age >=21? "beer": "juice";

    // console.log(averageage);


    // let player = "scisser";

    // let computer = "rock";


    // let result = player === computer ? "tie":

    // player ==="rock" && computer ==="papper"?

    // "computer wins":

    // player === "scisser" && computer === "rock"?

    // "computer wins":

    // player ==="papper" && computer ==="scisser"?

    // "computer wins":
    // "player wins"


    // console.log(result);




    // let value = prompt("helloo guys enter your name:")

    // if (value){
    // 	console.log( value ?? "thank you");	
    // }

    // else{
    // 	console.log("you dit not enter the name");
    // }


    // let playergame = confirm("shall we play a game")

    // if(playergame){
    // 	let playerchoice = prompt("enter rock ,paper, or scisser")

    // 	if (playerchoice){
    // 		let playerone =playerchoice.trim().toLowerCase()

    // 		if(playerone ==="rock"||
    // 		playerone === "paper"||
    // 		playerone ==="scisser")

    //  		{
    // 		let computerchoice = Math.floor(Math.random() *3+1);
    // 		let computer =
    // 		 computerchoice === 1? "rock":

    // 		computerchoice ===2 ?"paper":
    // 		"scisser";

    // 		let result = playerone === computer ?"tie":

    // 		playerone === "rock" && computer === "paper"?
    // 		"computer wins":
    // 		playerone === "paper" && computer ==="scisser"?
    // 		"computer wins":
    // 		playerone ==="scisser" && computer === "rock"?
    // 		"computer wins":"player wins"

    // 		alert (result)
    // 		let playagain = confirm("you want to play again")

    // 		playagain ? location.reload():alert("ok thank you for playing")

    // 		}
    // 		else{
    // 			alert("you dit not enter the rock , papaer , or scisser");

    // 		}
    // 	}
    // 	else{
    // 		alert("i guess you change your minde");

    // 	}

    // }
    // else{
    // 	alert("may be next timwe ");

    // }






    // this.properfun();

    //  this.arrayFun();


    // let name =["D","v","f","s"] 
    // let i =0;
    // for (i=0;i<name.length;i++){
    //   console.log(name[i]);
    // }


    // let i=1
    // while(i<=50){
    //   console.log(i);
    //   i=i+10

    // }


    // let cars =["bmw","audi","benz","ferrari","bugati"]
    // let i=2;
    // while(i<cars.length){
    //   console.log(cars[i]);
    //   i++;

    // }

    // do{
    //   console.log(cars[i]);
    //   i=i+1;

    // }while(i<4)







    // let playgame = confirm("get start the paper , stone , scessior game")

    // if (playgame){
    //   let playerchoice = prompt ("choose paper ,stone , scessior");

    //   if(playerchoice){

    //     let player =playerchoice.trim().toLowerCase();

    //     if(player === "paper"||
    //        player ==="stone"||
    //        player ==="scessior"){

    //         let computerchoice = Math.floor(Math.random()* 3+1)
    //         let computer = 
    //         computerchoice === 1?
    //         "paper":
    //         computerchoice === 2 ?
    //         "stone":
    //         "scessior";


    //         let result =
    //         player === computer ?
    //          "Tie game ":
    //          player === "stone" && computer === "paper"?
    //          `player ${player}\ncomputer ${computer} \ncomputer win`:
    //          player === "scessior" && computer === "stone"?
    //          `player ${player}\ncomputer ${computer}\ncomputer win`:
    //          player === "paper" && computer === "scessior"?
    //          `player ${player}\ncomputer ${computer}\ncomputer win`:
    //          `player  ${player}\ncomputer ${computer}\npalyer win`;


    //         alert (result);

    //         let playagain = confirm("play again")

    //         playagain ? location.reload():"thangs for playing the game"



    //     }
    //     else{
    //       alert("pls emetr the crt name")
    //     }


    //   }
    //   else {
    //     alert ("u can change your mind pls play next time")
    //   }

    // }
    // else{
    //   alert (" may be next time")
    // } 
    // }




    this.sir()



  // this.mam();

// this.mamm();
// this. selectId();


this.initApp();

this.santhosh();

  }





//   selectid(){

// //     const  select = document.querySelector("#view3")
 
// //     if (select !== null) {
// //       const div = select.querySelector("div");

// //       if (div !== null) {
// //           const h2 = div.querySelector("h2");

// //           if (h2 !== null) {
// //             // Now you can safely use h1 and set its innerHTML
           
// //         } 
// //            console.log(select);
// //     } 
 
    

// // }     


// // document.addEventListener("readystatechange",(event)=>{
// //    if(event.target.readyState ==="complete"){

// //     console.log("complete");
    

// //    }
// // })

// document.addEventListener("readystatechange", (event: Event) => {
//   if (event.target instanceof Document && (event.target as Document).readyState === "complete") {
//      console.log("complete");
//      initApp();
//   }
// });

// const initApp =()=>{
//      const view = document.querySelector("#view3")

//      if (view !== null) {
//       const div = view.querySelector("div");

//       if (div !== null) {
//           const h2 = div.querySelector("h2");

//           if (h2 !== null) {
//             // Now you can safely use h1 and set its innerHTML
           
//         } 
//     }  
// }  
// view.addEventListener("click",(every:Event)=>{
//      view.style.backgroundColor ="green"
// })   
// }


    
//     }



// selectId() {
//   const view = document.querySelector("view3");

//   if (view instanceof HTMLElement) {
//     const div = view.querySelector("div");

//     if (div instanceof HTMLElement) {
//       const h2 = div.querySelector("h2");

//       if (h2 instanceof HTMLElement) {
//         // Now you can safely use h2 and set its innerHTML
//         console.log("h2 content:", h2.innerHTML);
//       }
//     }
//   }
// }
// initApp() {

//   const view3 = document.querySelector("#view3")
//   if (this.view3) {
//     this.view3.nativeElement.addEventListener("click", (event: Event) => {
//       (event.currentTarget as HTMLElement).style.backgroundColor = "black";
//     });

//     const div = this.view3.nativeElement.querySelector("div");
//     if (div) {
//       div.addEventListener("click", (event: Event) => {
//         div.style.backgroundColor = "green";
//         div.style.border ="5px solid white"
//       });

//       const h2 = div.querySelector("h2");
//       if (h2) {
//         h2.addEventListener("click", (event: Event) => {
//           h2.style.backgroundColor = "white";
//         });
//       }
//     }
//   }
// }

// initApp() {
//   const view3 = document.querySelector("#view3") as HTMLElement;

//   if (view3) {
//     view3.addEventListener('click', (event: Event) => {
//       view3.style.backgroundColor = 'green';
//       view3.style.border = '5px solid white';
//     });

//     const div = view3.querySelector('div') as HTMLElement;

//     if (div) {
//       div.addEventListener('click', (event: Event) => {
//         div.style.backgroundColor = 'green';
//         div.style.border = '5px solid white';
//       });

//       const h2 = div.querySelector('h2') as HTMLElement;

//       if (h2) {
//         h2.addEventListener('click', (event: Event) => {
//           h2.style.color = 'black';
//           h2.style.backgroundColor="pink"
//         });
//       }
//     }
//   }
// }



santhosh(){
  document.addEventListener("readystatechange",(event:Event)=>{
    if((event.target as HTMLDocument).readyState ==="complete"){
  
      console.log("complete");
    }
  })


}

  
initApp (){

  
  const view3 = document.querySelector("#view3") as HTMLElement;
  if(view3){
    view3.addEventListener("click" ,(event:Event)=>{
      view3.style.backgroundColor ="blue";
    });

    const div = view3.querySelector("div") as HTMLElement;
    if(div){
      div.addEventListener("click",(event:Event)=>{
        div.style.backgroundColor="pink"
      });
      const h2 = div.querySelector("h2") as HTMLElement;
      if(h2){
        h2.addEventListener("click" ,(event:Event)=>{
          h2.style.backgroundColor="yellow"
        })
      }
    }
  }
}




  clickfun():void{
    const matter = document.getElementById("demoo")
   if(matter){
      matter.innerHTML= ""
      alert("dsnsc")
   }
    
  }


sir():void {
  
  const view1 = document.getElementById("view1");
  console.log(view1);
  
 if( view1 != null){
  view1.style.display="flex"
 }
}


// mam(){
//   const view2 = document.getElementById("view2");

//   console.log(view2);
  
//   if( view2 != null){
//     const functions = view2 as HTMLElement;
//     console.log( functions.children);
      
//   }
// }

//  mamm() {
//   // Use querySelectorAll with a complex selector
//   const view2 = document.querySelectorAll('div');

//   console.log(view2);

//   // Example: Set style for the fourth element (index 3)
//   if (view2.length > 0) {
//     const fourthElement = view2[2] as HTMLElement; // Cast to HTMLElement
//     fourthElement.style.backgroundColor="blue" 

//     for (let i = 0; i < view2.length; i++) {
//       const currentElement = view2[i] as HTMLElement; // Cast to HTMLElement
//       currentElement.style.width = "190px";
//       currentElement.style.backgroundColor="blue";

//       // currentElement.style.display="none";
//     }

//     const creatediv =(parent: HTMLElement,item: string | null) =>{
//       const newdiv = document.createElement("div");
//       newdiv.textContent=item;
//       newdiv.style.width="100px";
//       newdiv.style.height="100px";
//       newdiv.style.margin="30px"
//       newdiv.style.backgroundColor="yellow";
//       newdiv.style.color="black";
//       newdiv.style.display="flex";
//       newdiv.style.justifyContent="center";
//       newdiv.style.alignItems="center";
//       parent.appendChild(newdiv);
      
//     }

//     for(this.i=0;this.i<10;this.i++){
//       creatediv(fourthElement,this.i)
//     }
//   } 
// }


  demofun() {
    throw new Error('Method not implemented.');
  }


  

//   demo(){
//     const studentInstance = new StudentData("John Doe", "123 Main St", 20);

//     studentInstance.principal="vasanth"
//     studentInstance.students();

//     let demoTag = document.getElementById("demo") as HTMLElement;

// // Set the innerHTML of the element to the age property of your StudentData instance
// demoTag.innerHTML = studentInstance.address;
//   }


  // chart: any;

  // chartOptions = {
  //   animationEnabled: true,
  //   theme: "light2",
  //   title:{
  // 	text: "Revenue Analysis"
  //   },
  //   axisY: {
  // 	title: "Number of Orders",
  // 	includeZero: true
  //   },
  //   axisY2: {
  // 	title: "Total Revenue",

  //   // titles:"zero Revenue",
  // 	includeZero: true,
  // 	labelFormatter: (e:any) => {
  // 		var suffixes = ["", "K", "M", "B"];

  // 		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
  // 		if(order > suffixes.length - 1)
  // 			order = suffixes.length - 1;

  // 		var suffix = suffixes[order];
  // 		return '$' + (e.value / Math.pow(1000, order)) + suffix;
  // 	}
  //   },
  //   toolTip: {
  // 	shared: true
  //   },
  //   legend: {
  // 	cursor: "pointer",
  // 	itemclick: function (e: any) {
  // 		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
  // 			e.dataSeries.visible = false;
  // 		} else {
  // 			e.dataSeries.visible = true;
  // 		} 
  // 		e.chart.render();
  // 	}
  //   },
  //   data: [{
  // 	type: "column",
  // 	showInLegend: true,
  // 	name: "Revenue",
  // 	axisYType: "secondary",
  // 	yValueFormatString: "$#,###",
  // 	dataPoints: [
  // 		{ label: "Jan", y: 250000 },
  // 		{ label: "Feb", y: 431000 },
  // 		{ label: "Mar", y: 646000 },
  // 		{ label: "Apr", y: 522000 },
  // 		{ label: "May", y: 464000 },
  // 		{ label: "Jun", y: 470000 },
  // 		{ label: "Jul", y: 534000 },
  // 		{ label: "Aug", y: 407000 },
  // 		{ label: "Sep", y: 484000 },
  // 		{ label: "Oct", y: 465000 },
  // 		{ label: "Nov", y: 424000 },
  // 		{ label: "Dec", y: 231000 }
  // 	]
  //   },{
  // 	type: "spline",
  // 	showInLegend: true,
  // 	name: "No of Orders",
  // 	dataPoints: [
  // 		{ label: "Jan", y: 372 },
  // 		{ label: "Feb", y: 412 },
  // 		{ label: "Mar", y: 572 },
  // 		{ label: "Apr", y: 224 },
  // 		{ label: "May", y: 246 },
  // 		{ label: "Jun", y: 601 },
  // 		{ label: "Jul", y: 642 },
  // 		{ label: "Aug", y: 590 },
  // 		{ label: "Sep", y: 527 },
  // 		{ label: "Oct", y: 273 },
  // 		{ label: "Nov", y: 251 },
  // 		{ label: "Dec", y: 331 }
  // 	]
  //   }]
  // }	


  playGame() {
    const playGame = confirm("Shall we play a game");

    if (playGame) {
      this.gameStarted = true;
      this.showResult = false;
      this.resultMessage = '';
    } else {
      alert("Maybe next time");
    }
  }

  submitChoice() {
    const playerChoice = this.playerChoice.trim().toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      const computerChoice = Math.floor(Math.random() * 3) + 1;
      const computer =
        computerChoice === 1 ? "rock" :
          computerChoice === 2 ? "paper" :
            "scissors";

      this.result = playerChoice === computer ? "It's a tie" :
        (playerChoice === "rock" && computer === "paper") ||
          (playerChoice === "paper" && computer === "scissors") ||
          (playerChoice === "scissors" && computer === "rock") ?
          "Computer wins" :
          "You win";

      this.resultMessage = this.result;
      this.showResult = true;
    } else {
      this.resultMessage = "You did not enter rock, paper, or scissors";
    }
  }

  playAgain() {
    this.gameStarted = false;
    this.playerChoice = '';
    this.showResult = false;
    this.result = '';
    this.resultMessage = '';
  }


















  // let i=0;
  // let name= "vasanth";

  // for(i=0;i<=name.length;i++){
  //   console.log(name.charAt(i));
  // }



  // let i=0;

  // while(i<=10){
  //   if(i===4){
  //     i=i+1;
  //     continue;
  //   }
  //  i=i+1;

  // }
  // console.log(i);


  // let i = 0;

  // while (i <= 10) {
  //   if (i === 4) {
  //     i = i + 1; 
  //     continue;
  //   }
  //   console.log(i);
  //   i = i + 1; 
  // }


  //  function getTheEmail(email: any) {
  //   return email.charAt(0).toUpperCase() + email.slice(1, email.indexOf("@"));
  // }

  // console.log(getTheEmail("vasanthorton2600@gmail.com"));

  //  const myarray=["vaasnth","kuamr","vijay"]

  //  const myarrayA=["gopal","muthu","pandy"]


  // //  const  result = myarray.concat(myarrayA).reverse();

  // const result = [...myarray,...myarrayA]

  //  console.log(result);






  // const myobjectA={

  //   sub:"english",
  //   gender:"male",

  //   class:{
  //     students:"both",
  //     teachers:999
  //   },

  //   principal:["male","female"],
  //   action: function demoFun(){
  //     return "hello"
  //   }


  // };



  // console.log(myobjectA.class.teachers);

  // console.log(myobjectA.action());

  // const myarrayB = Object.create(myobjectA);

  // myarrayB.gender="others"

  // myarrayB.action =function demoFun(){
  //    return "poda *****"
  // }

  // console.log(myarrayB.action()+myarrayB.gender);



  // const myarrayC =Object.create(myarrayB)
  // myarrayC.work="workers";

  // console.log(myarrayC.work);


  // const cars ={
  //   car1:"bmw",
  //   car2:"benzee",
  //   car3:"audi",
  //   car4:"shift"
  // };



  // function demo({car2}:{car2:string}):string{
  //   return car2;
  // }

  // console.log(demo(cars));


  // const cars:Record<string, string> ={
  //   car1:"bmw",
  //   car2:"benzee",
  //   car3:"audi",
  //   car4:"shift"
  // };

  // // console.log(Object.values(cars));



  // for( let gaudi in cars){
  //   if(gaudi == "car2"){
  //     console.log(`${gaudi}:${cars[gaudi]}`);

  //   }
  // }





  // const value =Object.keys(cars)[0];


  // console.log(`${value}: ${cars[value]}`);




  // console.log(Object.values(cars));



  // for( let gaudi in cars){
  //   console.log(`${gaudi}: it's a ${cars[gaudi]}`);



  // }

  // const cars:Record<string, string> ={
  //   car1:"bmw",
  //   car2:"benzee",
  //   car3:"audi",
  //   car4:"shift"
  // };


  // delete cars['car1'];
  // console.log(cars.hasOwnProperty("car1"));

  // console.log(Object.values(cars));



  // for( let gaudi in cars){
  //   console.log(`${gaudi}: it's a ${cars[gaudi]}`);



  // }



  // const cars:Record<string, string> ={
  //   car1:"bmw",
  //   car2:"benzee",
  //   car3:"audi",
  //   car4:"shift"
  // };


  // const {car2:thisismycar2}=cars
  // console.log(`this is my favourite car ====>${thisismycar2}`);

  // function isInteger(myname: string): any {
  // 	throw new Error('Function not implemented.');
  // }
  // properfun() {

  //   let emails = ["vasanth@gmail.com", "rangasan221998@gmail.com", "santhosh.technify@gmail.com"];



  //   emails .forEach(name =>{
  //   var emailsAdd=name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
  //   console.log(emailsAdd);

  //   })

  //   // var editedEmails = [];
  //   // for (var i = 0; i < emails.length; i++) {


  //   //   var email = emails[i];
  //   //   email = email.charAt(0).toUpperCase() + email.slice(1).toLowerCase();
  //   //   // editedEmails.push(email);

  //   //   console.log("EDITED => " + email);

  // }

}

export class MyClass {
  private myProperty: string;

  constructor() {
    this.myProperty = 'Hello, TypeScript!';
  }

  public myMethod(): void {
    console.log(this.myProperty);
  }
}



// export class StudentData{
//   name: any;
//   add: any;
//   aag: any;
//   principal: string;
  
 
  
//   constructor( studentName: string,address: string, age: number){
//        this.name= studentName;
//        this.add=address;
//        this.aag=age 
//        this.principal="kuamr"
//   }

//   get totalstudets(){
//     return this.principal;
//   }
//   set totalstudets(totalstudets){
//     this.principal =totalstudets;
//   }


//   students(){
//     return console.log(this.name ,this.principal);
    
//   }
// }

export class StudentData {
  studentName: string;
  address: string;
  age: number;
  principal: string;

  constructor(studentName: string, address: string, age: number) {
    this.studentName = studentName;
    this.address = address;
    this.age = age;
    this.principal = "kumar";
  }

  get totalstudents() {
    return this.principal;
  }

  set totalstudents(totalstudents) {
    this.principal = totalstudents;
  }

  students() {
    
    console.log(`${this.studentName}, Principal: ${this.principal}`,this.age,this.principal);



    
    
  }
}

export class pizzafun{
  size: any;
  crust: any;
  method: any;

  constructor(script: any){
    this.size= "medium";
    this.crust="original"

    this.method=script
  }


  demofun(){
        console.log("man===="+this.crust , this.method);

        

 let demoTag = document.getElementById("demooo") as HTMLElement;
 demoTag.innerHTML = this.method;
        
  }


}

export class specialpizza extends pizzafun {
  jam: any;

  constructor(){
     
    super("");
      this.jam="more"
  }

  slice(){
    console.log(`our ${this.jam} and the ${this.size}`);
    
  }

}





















function initApp() {
  throw new Error('Function not implemented.');
}

