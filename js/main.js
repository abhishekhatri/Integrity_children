var correctAnswerIndex=0;
var score=0;
var scoreadd=2;
var hint;
var arr;
var qid;
if(!localStorage["qid"]){
	localStorage["qid"]=1;
}else{
	qid=localStorage["qid"];
}
$(".answer_button").click(function(){
	//alert(parseInt(this.id.slice(3)));
	if(parseInt(this.id.slice(3))==correctAnswerIndex){
		qid++;
		score+=scoreadd;
		//alert(score);
		scoreadd=2;
		$("#score").text(score);
		teacher.play("Congratulate");
		teacher.speak("You did the right thing");
		loader(qid);
	}else{
		scoreadd=1;
		teacher.play("GestureDown");
		merlin.show();
		merlin.speak(hint);
		//merlin.hide();
	}

});
$(document).ready(function(){
	loader(qid);
	/*$.ajax({
                    url: "output_json.php",
                    data: {"qid":1}, //returns all cells' data
                    dataType: 'json',
                    type: 'GET',
		success:function(data){
	correctAnswerIndex=data.correct;
	hint=data.hint;
	arr=data;	
	$("#question").text(data.output);
	$("#ans0").text(data.option[0]);
	$("#ans1").text(data.option[1]);
	$("#ans2").text(data.option[2]);
	$("#ans3").text(data.option[3]);
	}	
	});*/
});
function loader(qid){
	$.ajax({
                    url: "output_json.php",
                    data: {"qid":qid}, //returns all cells' data
                    dataType: 'json',
                    type: 'GET',
		success:function(data){
	correctAnswerIndex=data.correct;
	hint=data.hint;
	arr=data;	
	$("#question").text(data.output);
	$("#ans0").text(data.option[0]);
	$("#ans1").text(data.option[1]);
	$("#ans2").text(data.option[2]);
	$("#ans3").text(data.option[3]);
	}	
	});

}
	
