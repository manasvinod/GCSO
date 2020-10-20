function bounceoff(obj1,obj2){
    if(obj1.x-obj2.x < obj2.width/2 +obj1.width/2
      &&obj2.x-obj1.x < obj2.width/2 +obj1.width/2){
  obj1.velocityX=obj1.velocityX*(-1);
  obj2.velocityX=obj2.velocityX*(-1);
  
      }
    if(obj1.y-obj2.y < obj2.height/2 +obj1.height/2
    &&obj2.y-obj1.y < obj2.height/2 +obj1.height/2){
      obj1.velocityY=obj1.velocityY*(-1);
      obj2.velocityY=obj2.velocityY*(-1);
    }
    
  
  
  
  }
  function isTouching(){
  
    if(movingrect.x-fixrect.x < fixrect.width/2 +movingrect.width/2
      &&fixrect.x-movingrect.x < fixrect.width/2 +movingrect.width/2
    &&movingrect.y-fixrect.y < fixrect.height/2 +movingrect.height/2
    &&fixrect.y-movingrect.y < fixrect.height/2 +movingrect.height/2){
    
    
    
      movingrect.shapeColor="red";
      fixrect.shapeColor="red";
    }
    
    else{
      movingrect.shapeColor="green";
      fixrect.shapeColor="green";
    }
  
  }