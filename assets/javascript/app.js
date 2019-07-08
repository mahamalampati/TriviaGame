var time = 20;
var questions =[
    { q:"What do doctors look at through an ophthalmoscope? ",
     a: "eye" , b:"nose",c:"mouth",d:"ear"},
     {q: "What nation produces two thirds of the world’s vanilla? ",
      a: "south africa", b: "madagascar", c:"tanzania",d:"zambia" },
     {q:" What was Friedrich Serturner the first to extract from opium and use as a pain reliever? ",
      a: "asprin",b:"tylenol",c:"heroine",d:"morphine"},
     {q:" What country suffered the worst two earthquakes in history, killing 830,000 in 1556 and 750,000 in 1976? ",
     a: "India",b:"mexico",c:"china",d:"japan"  },
     {q: "What disease is the focus of oncology? ",
       a: "cardiac arrest", b:"cancer",c:"flu",d:"kidney failure"  },
     {q: "What falling fruit supposedly inspired Isaac Newton to write the laws of gravity? ",
      a: "apple", b:"orange",c:"pears",d:"green apple" },
 ] ;

 

 
   var correctAnswers = 0;
   var wrongAnswers =0;
   var intervalId;
   var timeremaining;
  
   

   var questionIndex=0;
   
   function gamePlay()
   {

    $("#question").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
      
       $(".startBtn").on("click",function()
       {
        $("button").remove(".startBtn");
        
       renderQuestions();
        
       });
   
      }
   
   
   function renderQuestions()
   {
    $("#question").empty();
    $("#answer1").empty();
    $("#answer2").empty();
    $("#answer3").empty();
    $("#answer4").empty();
    
   
    if (questionIndex <= (questions.length - 1)) {
        $("#question").append("<p>" + questions[questionIndex].q + "</p>");
       
       
        $("#answer1").append("<p>" + questions[questionIndex].a + "</p>");
        $("#answer2").append("<p>" + questions[questionIndex].b + "</p>");
        $("#answer3").append("<p>" + questions[questionIndex].c + "</p>");
        $("#answer4").append("<p>" + questions[questionIndex].d + "</p>");
       

      }
      // If there aren't, render the end game screen.
      else {
        $("#question").text("Game Over!");
        $("#correctanswers").text ("correctanswers :" + correctAnswers);
        $("#wronganswers").text ("wronganswers :" + wrongAnswers);
        $("#validation").empty();
        
        var input = $("<input type='button' value='StartOver' />");
        input.appendTo($("#gameplay"));
      }
       };
      
       renderQuestions();
       
       function first(){
       $("#answer1").on("click", function() {

        
         if(questionIndex === 0 || questionIndex === 5){
        $("#validation").text("correct");
         correctAnswers++;
         
         
      }

        else{

          $("#validation").text("incorrect");
         wrongAnswers++;

        
        }
      
        questionIndex++;
        renderQuestions();
      });
       }
  function second(){
      $("#answer2").on("click", function() {

        if(questionIndex === 1 || questionIndex === 4){
          $("#validation").text("correct");
          correctAnswers++;
        
        }

       else{

        $("#validation").text("incorrect");
        wrongAnswers++;
      
       }
       questionIndex++;
       renderQuestions();

     });
    }
    function third(){
     $("#answer3").on("click", function() {

      if(questionIndex === 3){
        $("#validation").text("correct");
        correctAnswers++;

        
      }

     else{

      $("#validation").text("incorrect");
      wrongAnswers++;
      
     }
     questionIndex++;
     renderQuestions();

   });
  }
  function four(){
   $("#answer4").on("click", function() {

    if(questionIndex === 2){
      $("#validation").text("correct");
      correctAnswers++;
      
    
    }

   else{

    $("#validation").text("incorrect");
    wrongAnswers++;
    
   }
   questionIndex++;
   renderQuestions();

 });}

 function submit(){

    first();
    second();
    third();
    four();
    
 }

 $("StartOver").on("click", function(){

   gamePlay();
 }

 gamePlay();
 submit();
 


 
 

 
 
  
 
  

  
   
  
          // Increment the questionIndex variable and call the renderQuestion function.
          
         
  
        
     
      
  