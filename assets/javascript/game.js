/*$(document).ready(function(){
	
// create random number of 4 
const randomValueArr =[];
let totalValue=0;
let wins=0;
let losess=0;
let game = true;
let target=0;



for(let i=0; i<4; i++)
	{
		randomValueArr[i]= Math.floor(Math.random()*19)+1;
	}
//create random value for the target
const targetRandom = Math.floor(Math.random()*120)+1;
//passing targetRandom 
$("#cScore").text(targetRandom);

alert("Target Number is " + targetRandom);

if(targetRandom == totalValue){
	wins++;
	console.log("You Win the game");
	//need a reset the game
	}
else if(totalValue<targetRandom)
	{
		alert("this is totalValue" + total)
		$(".image1").on("click",function(){
			totalValue=parseInt(randomValueArr[0]);
			$("#uScore").text(totalValue);
			console.log("this is the total value" +totalValue);

		});
		if(totalValue==targetRandom){
			return false;
		}
				}
	}
});*/
/*

function add(){
	$(".image1").on("click", function(){
	totalValue = parseInt(randomValueArr[0]);
	$("#uScore").text(totalValue);
	target=totalValue;
	});

}
console.log("this is the "+target);

add();*/



/*if(totalValue!=targetRandom){


if(totalValue===targetRandom)
			{
				alert("You Win");
				wins++;
			}
else if(totalValue>targetRandom)
			{
				alert("You lose");
				losess++;
			}
else{

			$(".image1").on("click", function(){
				totalValue +=parseInt(randomValueArr[0]);
				$("#uScore").text(totalValue);
			
			});

			$(".image2").on("click", function(){
				totalValue +=parseInt(randomValueArr[1]);
			
				$("#uScore").text(totalValue);
			});
			$(".image3").on("click", function(){
				totalValue +=parseInt(randomValueArr[2]);
				
				$("#uScore").text(totalValue);
			});
			$(".image4").on("click", function(){
				totalValue +=parseInt(randomValueArr[3]);
			
				$("#uScore").text(totalValue);
			});
			}
		}*/
			



//if targetnumber is equal to totalvalue
//add wins +1;
//else if targetnumber larger than total value
//then lose +1;
//else if(targetnumber!= totalvalue || targetnumber < totalvelue){
//		click icon and add the value of image 
// if still targetnumber is not equal to total value 
//	 run a loop when i


		$(document).ready(function(){
		
		let randomValue=[];
		let wins=0;
		let losess=0;
		let totalValue =0;

		const computerGuess = Math.round(Math.random()*120);
		$("#computerGuess").text(computerGuess);
		
		for(let i =0; i<4; i++)
		{
			randomValue[i]=Math.round(Math.random()*19)+1;
		}
			
		for(let i =0; i<randomValue.length; i++)
		{
			let imageContent = $("<img>");
			imageContent.addClass("diamond-image");
			imageContent.attr("data-diamonValue", randomValue[i]);
			imageContent.attr('src','http://languageinstituteoftheamericas.com/wp-content/uploads/2016/11/ruby.png');
			$(".image-row").append(imageContent);

		}

			$(".diamond-image").on('click', function(){

				let imageValue = ($(this).attr("data-diamonValue"));
				imageValue = parseInt(imageValue);
				totalValue +=imageValue;
				$("#total").text(totalValue);
				
				if(totalValue==computerGuess){
					alert("You Win!");
					
					wins +=1;
					$("#wins").text(wins);
					}
				else if(totalValue>computerGuess){
					alert("You lose!");
					
					losess +=1;
					$("#losess").text(losess);
					}
			});
});
