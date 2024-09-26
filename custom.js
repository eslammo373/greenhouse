// toggle close btn

let togglenav = document.querySelector(".toggle");
let listNav = document.querySelector(".home .navbar .nav-list ul");
let item_nav = document.querySelector(".nav-list .links li a");

togglenav.onclick = function(){

    togglenav.classList.toggle("active");

    listNav.classList.toggle("visibal");
}

item_nav.onclick = function(){

    listNav.classList.toggle("visibal");
  
    
}


let nav = document.getElementById("nav");

 window.onscroll = function (){
    
    "use strict";
    
    if(window.pageYOffset > 150){
        nav.classList.add("on");
    }
    else{
      nav.classList.remove("on");
    }
   
};
// toggle close btn

let togglenavs = document.querySelector(".toggles");
let listNavs = document.querySelector(".navbars .nav-lists ul");
let item_navs = document.querySelector(".nav-lists .linkss li a");



let navs = document.getElementById("navs");

 window.onscroll = function (){
    
    "use strict";
    
    if(window.pageYOffset > 150){
        navs.classList.add("on");
    }
    else{
      navs.classList.remove("on");
    }
   
};
  /*******************Start  plant popup******************** */
  const pages = document.getElementById("local");

  pages.onclick = function(){
    toggleplantsPopup();
  }

  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("plant__button")){
      toggleplantsPopup()
      plantItemDetails(e.target.parentElement);
    
    }
    document.addEventListener("click", (e) =>{
      if(e.target.classList.contains("close-btn")){
        toggleplantsPopup()
      }
    })
  })

  function toggleplantsPopup(){

    document.querySelector(".plant__popup").classList.toggle("open")

}
function plantItemDetails(plantItem){

  document.querySelector(".plant__image__img img").src = plantItem.querySelector(".plant__item__img").src;

  document.querySelector(".item__one span").innerHTML 
  = plantItem.querySelector(".item__name").innerHTML;

  document.querySelector(".item__two span").innerHTML 
  = plantItem.querySelector(".item__season").innerHTML;

  document.querySelector(".item__three span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__days").innerHTML;

  document.querySelector(".item__four span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__temperature .propertiy__one").innerHTML;
  
  document.querySelector(".item__four span.propertiy__two").innerHTML 
  = plantItem.querySelector(".item__temperature .propertiy__two").innerHTML;

  document.querySelector(".item__five span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__Humidity .propertiy__one").innerHTML;
  
  document.querySelector(".item__five span.propertiy__two").innerHTML 
  = plantItem.querySelector(".item__Humidity .propertiy__two").innerHTML;

  document.querySelector(".item__sex span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__Air__Humidity .propertiy__one").innerHTML;

  document.querySelector(".item__sex span.propertiy__two").innerHTML 
  = plantItem.querySelector(".item__Air__Humidity .propertiy__two").innerHTML;

  document.querySelector(".item__seven span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__Intensity .propertiy__one").innerHTML;

  document.querySelector(".item__seven span.propertiy__two").innerHTML 
  = plantItem.querySelector(".item__Intensity .propertiy__two").innerHTML;

  document.querySelector(".item__eight span.propertiy__one").innerHTML 
  = plantItem.querySelector(".item__acidity .propertiy__one").innerHTML;

  document.querySelector(".item__eight span.propertiy__two").innerHTML 
  = plantItem.querySelector(".item__acidity .propertiy__two").innerHTML;
}
  /*******************end  plant popup******************** */

  /*******************Start  plant__add__plant******************** */
  const items = document.getElementById("plant__add__plant");


  items.onclick = function(){
    plantElem();
  }

  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("plant__add__plant")){
      
      plantElem(e.target.parentElement);
    
    }
   
  })

function plantElem(plantItem){

document.querySelector(".item_plant_system").value = document.querySelector(".item__one span").innerHTML;

document.querySelector(".item_season_system").value = document.querySelector(".item__two span").innerHTML;

document.querySelector(".elem__one").value = document.querySelector(".item__three span .propertiy__one").innerHTML;

document.querySelector(".elem__three").value = document.querySelector(".item__four span.propertiy__one").innerHTML;

document.querySelector(".elem__four").value = document.querySelector(".item__four span.propertiy__two").innerHTML;

document.querySelector(".elem__five").value = document.querySelector(".item__five span.propertiy__one").innerHTML;

document.querySelector(".elem__sex").value = document.querySelector(".item__five span.propertiy__two").innerHTML;

document.querySelector(".elem__seven").value = document.querySelector(".item__sex span.propertiy__one").innerHTML;

document.querySelector(".elem__eight").value = document.querySelector(".item__sex span.propertiy__two").innerHTML;

document.querySelector(".elem__nine").value = document.querySelector(".item__seven span.propertiy__one").innerHTML;

document.querySelector(".elem__ten").value = document.querySelector(".item__seven span.propertiy__two").innerHTML;

document.querySelector(".elem__elev").value = document.querySelector(".item__eight span.propertiy__one").innerHTML;

document.querySelector(".elem__twoelve").value = document.querySelector(".item__eight span.propertiy__two").innerHTML;

if (document.querySelector(".item_plant_system").value === "apple"){
  document.querySelector(".item_season_system").value = "winter";
}
else if(document.querySelector(".item_plant_system").value === "lemon"){
  document.querySelector(".item_season_system").value = "summer";

}
else if(document.querySelector(".item_plant_system").value === "cucumber"){
  document.querySelector(".item_season_system").value = "winter";

}
else if(document.querySelector(".item_plant_system").value === "grapes"){
  document.querySelector(".item_season_system").value = "summer";

}
else if(document.querySelector(".item_plant_system").value === "mango"){
  document.querySelector(".item_season_system").value = "fall";

}
else if(document.querySelector(".item_plant_system").value === "pepper"){
  document.querySelector(".item_season_system").value = "winter";

}
else if(document.querySelector(".item_plant_system").value === "pngwing"){
  document.querySelector(".item_season_system").value = "fall";

}
else if(document.querySelector(".item_plant_system").value === "straybery"){
  document.querySelector(".item_season_system").value = "summer";

}
else if(document.querySelector(".item_plant_system").value === "tomato"){
  document.querySelector(".item_season_system").value = "summer";

}
else{
  document.querySelector(".item_season_system").value = "summer";

}

}
    /*******************end  plant__add__plant******************** */

/*******************Start  team popup******************** */
const files = document.getElementById("now");

files.onclick = function(){
  toggleteamsPopup()
}

document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("team__button")){
    toggleteamsPopup()
    teamItemDetails(e.target.parentElement)
  }
  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("close-btns")){
      toggleteamsPopup()
    }
  })
})
function toggleteamsPopup(){

  document.querySelector(".team__popup").classList.toggle("open")
}

function teamItemDetails(teamItem){

  document.querySelector(".team__popup-content__right img").src = teamItem.querySelector(".team_image").src;
  document.querySelector(".team__popup-content__head").innerHTML 
  = teamItem.querySelector(".detail__title").innerHTML;

  document.querySelector(".team__popup-content__para").innerHTML 
  = teamItem.querySelector(".detail__descriptions").innerHTML;


  document.querySelector(".mebers-one a ").href = 
   teamItem.querySelector(".member-one a").href;


   document.querySelector(".mebers-two a ").href = 
   teamItem.querySelector(".member-two a").href;

   document.querySelector(".mebers-three a ").href = 
   teamItem.querySelector(".member-three a").href;

   document.querySelector(".mebers-four a ").href = 
   teamItem.querySelector(".member-four a").href;

   document.querySelector(".mebers-five a ").href = 
   teamItem.querySelector(".member-four a").href;

}
/*******************end  team popup******************** */

const slecsystem = document.querySelector(".slec_system");

slecsystem.onclick = function(){
  // console.log(slecsystem.value);


  if( slecsystem.value == "automatic"){

  document.querySelector(".system__choose").style.display = "none";

  }
   
  else if( slecsystem.value == "manual"){

    document.querySelector(".system__choose").style.display = "block";  
    }

}
const ToggleItem = document.querySelectorAll(".toggle-input");
 const toggleLabel = document.querySelectorAll('.toggle-label');

 toggleLabel.forEach(item => {
   item.addEventListener("click",() =>{
  
   item.classList.toggle("active")

   });

});

	// Access the testimonials
	let testSlide = document.querySelectorAll('.testItem');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	// Add click event to the indicators
	function switchTest(currentTest){
		currentTest.classList.add('actives');
		var testId = currentTest.getAttribute('attr');
		if(testId > counter){
			testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(testId == counter){return;}
		else{
			testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
		}
		indicators();
	}

	// Add and remove actives class from the indicators
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' actives', '');
		}
		dots[counter].className += ' actives';
	}

	// Code for auto sliding
	function slideNext(){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= testSlide.length - 1){
			counter = 0;
		}
		else{
			counter++;
		}
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}
	function autoSliding(){
		deleteInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	// Stop auto sliding when mouse is over the indicators
	const container = document.querySelector('.indicators');
	container.addEventListener('mouseover', pause);
	function pause(){
		clearInterval(deleteInterval);
	}

	// Resume sliding when mouse is out of the indicators
	container.addEventListener('mouseout', autoSliding);



