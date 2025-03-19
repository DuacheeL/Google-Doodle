// website loaded?
console.log("Okay");



// Astronaut animation
gsap.to(".astronaut", {
	y: 5,
	duration: 1,
	repeat: -1,
	yoyo: true,

});

gsap.fromTo("#bluepixel",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 5,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	}
);

gsap.fromTo("#yellowpixel1",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 3,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	}
);

gsap.fromTo("#yellowpixel2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	}
);


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

// ------------------- Exploding Red Stars Animation Start -------------------

//  First Red Exploding Star - Top Left
gsap.fromTo(".red-star-burst",
	{
	opacity: 0,
	},
	{
	delay: 2,
	opacity: 1,
	duration: 1.8,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
	},
);

// Red Outer Pixels for the First Red Exploding Star
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



//Second Red Exploding Star - Bottom Right
gsap.fromTo(".red-star-burst-2",
	{
		opacity: 0,
		x: 2,
		y: -2,
	},
	{
		opacity: 1,
		duration: 2,
		repeat: -1,
		yoyo: true,
		ease: "power1.inOut",
	}
);

// Red Outer Pixels for the SECOND Red Exploding Star
gsap.fromTo(".red-bursting-2-red1",
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

gsap.fromTo(".red-bursting-2-red2",
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

gsap.fromTo(".red-bursting-2-red3",
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

gsap.fromTo(".red-bursting-2-red4",
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

// Orange Outer Pixels for the SECOND Red Exploding Star
gsap.fromTo(".red-bursting-2-orange1",
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

gsap.fromTo(".red-bursting-2-orange2",
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

gsap.fromTo(".red-bursting-2-orange3",
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

gsap.fromTo(".red-bursting-2-orange4",
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

// Outer Yellow Pixels for the SECOND Red Exploding Star
gsap.fromTo(".red-bursting-2-yellow1",
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

gsap.fromTo(".red-bursting-2-yellow2",
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

gsap.fromTo(".red-bursting-2-yellow3",
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


gsap.fromTo(".red-bursting-2-yellow4",
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

gsap.fromTo(".red-bursting-2-yellow5",
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

// Red Smaller Stars behind the Red Exploding stars
gsap.fromTo ([".redSmallstar5left", ".redSmallstar5right", ".redSmallstar5bottom", ".redSmallstar5top",],
	{
	opacity: 0,
	},
	{
	opacity: 1,
	duration: .5,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
	}
);

gsap.fromTo ([".redSmallstar6left", ".redSmallstar6right", ".redSmallstar6bottom", ".redSmallstar6top",],
	{
	opacity: 0,
	},
	{
	opacity: 1,
	duration: .3,
	repeat: -1,
	yoyo: true,
	ease: "power1.inOut",
	}
);

// ------------------- Exploding Red Stars End -------------------

// ------------------- Big Yellow Stars Animation Start -------------------

// Yellow Big Star 1 Animation
gsap.fromTo (".smallYellowStar1",
	{
		rotation: 0,
	},
	{
		rotation: -360,
		transformOrigin: "center center",
		duration: 120,
		repeat: -1,
	},
	
);

// Outer Yellow Pixels 1
gsap.fromTo(".smallYellowStar1-middle-middle",
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

gsap.fromTo(".smallYellowStar-1top",
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

gsap.fromTo(".smallYellowStar-1bottom",
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

gsap.fromTo(".smallYellowStar-1left",
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

gsap.fromTo(".smallYellowStar-1right",
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

// Yellow Big Star 2 Animation
gsap.fromTo (".smallYellowStar2",
	{
		rotation: 0,
	},
	{
		rotation: -360,
		transformOrigin: "center center",
		duration: 220,
		repeat: -1,
	},
	
);

// Outer Yellow Pixels 2
gsap.fromTo(".smallYellowStar2-middle-middle",
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

gsap.fromTo(".smallYellowStar-2top",
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

gsap.fromTo(".smallYellowStar-2bottom",
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

gsap.fromTo(".smallYellowStar-2left",
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

gsap.fromTo(".smallYellowStar-2right",
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

// Yellow Big Star 3 Animation
gsap.fromTo (".smallYellowStar3",
	{
		rotation: 0,
	},
	{
		rotation: 360,
		transformOrigin: "center center",
		duration: 230,
		repeat: -1,
	},
	
);

// Outer Yellow Pixels 3
gsap.fromTo(".smallYellowStar3-middle-middle",
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

gsap.fromTo(".smallYellowStar-3top",
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

gsap.fromTo(".smallYellowStar-3bottom",
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

gsap.fromTo(".smallYellowStar-3left",
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

gsap.fromTo(".smallYellowStar-3right",
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


