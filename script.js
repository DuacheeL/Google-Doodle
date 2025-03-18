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
	x: "-10",        
	y: "+6",        
	rotation: "+=5", 
	duration: 4,    
	repeat: -1,     
	yoyo: true,      
	ease: "power1.inOut", 
  });
  

  gsap.to("#o-letter1", {
	x: "+=3",        
	y: "+=7",       
	rotation: "-=3",  
	duration: 2,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
  });
  
  gsap.to("#o-letter2", {
	x: "-=6",        
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

// Exploding Red Stars -------------------

//  First Red Star - Top Left
gsap.fromTo(".red-star-burst",
	{
	opacity: 0,
	},
	{
	opacity: 1,
	duration: 1.4,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
	},
);

// Red Outer Pixels
gsap.fromTo(".red-bursting-1-red1",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .7,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-red2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .8,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-red3",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .9,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-red4",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

// Orange Outer Pixels
gsap.fromTo(".red-bursting-1-orange1",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-orange2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1.2,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-orange3",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1.3,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-orange4",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1.4,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

// Outer Yellow Pixels
gsap.fromTo(".red-bursting-1-yellow1",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .2,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-yellow2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .3,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-yellow3",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .4,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);


gsap.fromTo(".red-bursting-1-yellow4",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .5,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

gsap.fromTo(".red-bursting-1-yellow5",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: .6,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	},
);

// Red Smaller Stars behind the Red Exploding star
gsap.fromTo ([".redSmallstar5left", ".redSmallstar5right", ".redSmallstar5bottom", ".redSmallstar5top"],
	{
	opacity: 0,
	},
	{
	opacity: 1,
	duration: .5,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",v
	},
);



