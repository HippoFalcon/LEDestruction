var DA = [];
var maxDA = 0.001;
var P = [];
var num = 20;
var diam = 1;
var dev = 20;



function rotatex( point , center , angle ) {
	var output = createVector( 0 , 0 );
	var point1 = p5.Vector.sub( point, center );
	
	output.x = point1.x*cos( angle) - point1.y*sin( angle );
	output.y = point1.x*sin( angle ) + point1.y*cos( angle );
	output.add( center );
	return output;
}


function setup() {
	createCanvas( windowWidth , windowHeight );
	
	var rgb = random(255,255,255);
	
	noStroke();
	fill(rgb,rgb,rgb);
	stroke( 255 , 255 , 255 , 128 );
}

function draw() {
 var rgb = random(0,255);
background(0,0,0,25);
  noFill();
  strokeWeight(20);
  push();
  translate( 0.5*width , 0.5*height );
  
  var N = 7;
  
  for( var i = 0 ; i < N ; i++ ) {
    push();
    rotate( 2*PI * i/N);
    var p0 = createVector( (-0.2*rgb)*width , (0)*height );
  	var p1 = createVector( (-0.75)*width , (0)*height );
  	var p2 = createVector( ( 0.01*rgb)*width , (0)*height );
  	var p3 = createVector( ( 0.75)*width , (0)*height );
    
    var pr1 = rotatex( p1 , i , frameCount*0.01 );
    var pr3 = rotatex( p3 , p2 , -frameCount*0.01 );
    stroke( i,mouseX,mouseX,26);
    bezier( p0.x , p0.y , pr1.x , pr1.y , pr3.x , pr3.y , p2.x , p2.y );
    
    pr1 = rotatex( p1 , i , frameCount*0.01 + 0.5*PI );
    pr3 = rotatex( p3 , p2 , -frameCount*0.01 - 0.5*PI );
    stroke( rgb,i,mouseY,26);
    bezier( 0.5*p0.x , 0.5*p0.y , pr1.x , pr1.y , pr3.x , pr3.y , 0.5*p2.x , 0.5*p2.y );
    
    pr1 = rotatex( p1 , i , frameCount*0.01 + PI );
    pr3 = rotatex( p3 , p2 , -frameCount*0.01 - PI );
    stroke(mouseX,i,mouseY,26);
    bezier( p0.x , p0.y , pr1.x , pr1.y , pr3.x , pr3.y , p2.x , p2.y );
    
    pr1 = rotatex( p1 , i , frameCount*0.01 - 0.5*PI );
    pr3 = rotatex( p3 , p2 , -frameCount*0.01 + 0.5*PI );
    stroke( i,1,mouseX,26);
    bezier( 0.5*p0.x , 0.5*p0.y , pr1.x , pr1.y , pr3.x , pr3.y , 0.5*p2.x , 0.5*p2.y );
    
    push();
    
    
  }
  pop();
