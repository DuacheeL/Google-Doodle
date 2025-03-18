// website loaded?
console.log("Okay");



// Astronaut animation
gsap.to(".astronaut", {
	y: 5,
	duration: 1,
	repeat: -1,
	yoyo: true,
	
})

// Google Floating Animation
gsap.to("#g-letter1", {
	x: "-6",        
	y: "+6",        
	rotation: "+=5", 
	duration: 4,    
	repeat: -1,     
	yoyo: true,      
	ease: "power1.inOut", 
  });
  

  gsap.to("#o-letter1", {
	x: "+=3",        
	y: "+=3",       
	rotation: "-=3",  
	duration: 2,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  
  gsap.to("#o-letter2", {
	x: "-=4",        
	y: "+=4",        
	rotation: "+=4",  
	duration: 7,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  
 
  gsap.to("#g-letter2", {
	x: "-=10",      
	y: "-=3",        
	rotation: "-=10",  
	duration: 6,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  
  
  gsap.to("#l-letter", {
	x: "+=3",        
	y: "-=5",       
	rotation: "+=3", 
	duration: 4,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  
 
  gsap.to("#e-letter", {
	x: "+=3",        
	y: "-=4",       
	rotation: "-=9",  
	duration: 3,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  