//find addition
{
	let x=34;
	let y=56;
	let z=x+y;
	document.write(z) 
	document.write("<br>")
}
//calculate subraction
{
	let x=8;
	let y=4;
	let z=x-y;
	document.write(z)
	document.write("<br>")
}
//calculate multiplication
{
	let x=10;
	let y=30;
	let z=x*y;
    document.write(z)
	document.write("<br>")
}
//calculate division
{
	let x=5;
	let y=15;
	let z=x/y;
    document.write(z)
	document.write("<br>")
}
//Area of circle
{
	let a=Math.PI;
	let r=Math.pow(5,2);
    let A=a*r;
	document.write(A)
	document.write("<br>")
}
//Area of Triangle
{
	let a=1/2;
	let b=4;
	let h=8;
	let A=a*b*h;
	document.write(A)
	document.write("<br>")
}
//calculating simple intrest
{
  var p,t,r,SI;
    p=15;
    t=12;
    r=12;
    SI=(p*t*r)/100;
    document.write(SI);
	document.write("<br>")
}
//calculating square
{
  let a=Math.pow(4,2);
  document.write(a);
  document.write("<br>")
}	
//calculating cube
{
  let a=Math.pow(3,3);
   document.write(a);
  document.write("<br>")
}
//Program to SWAP two numbers with temp var
{
   var a,b,c;
   a=1;
   b=2;
   
   c=a;
   a=b;
   b=c;
document.write(a);
   document.write(b);
   document.write("<br>")
}
//Program to SWAP two numbers without temp var
{
   var a,b;
   a=1;
   b=2;
   
   a=a+b;
   b=a-b;
   a=a-b;
   document.write(a);
   document.write(b);
   document.write("<br>")
}
//Program to check number is positive or not
{
	var a,b;
	a=1;
	b=-2;
	if(a&&b == Math.sign(1)){
		document.write("positive")
	}
	else if(a||b == Math.sign(-1)) {
		document.write("negative")
	}
	document.write();
	document.write("<br>");
}

//switchcase
{
	let cash= "10001";
	
	switch (true){
		case (cash > 60000):
		   document.write("Buy An I-phone");
		   break;
		case (cash > 10000):
		   document.write("Buy Android Mobile");
		   break;
		case (cash > 5000):
		case (cash < 10000):
		   document.write("Buy a Basic Mobile");
		   break;
	}
}
		