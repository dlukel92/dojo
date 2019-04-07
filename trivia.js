$(document).ready(function(){
    $('#question_getter').click(function(){
        $.get("https://opentdb.com/api.php?amount=10", displayQuestion)
        function displayQuestion(data){
            let results = data.results;
            $('#question').html("<div class='center'><p>"+results[0].question+"</p><br><p>"+results[0].incorrect_answers[0]+"</p><p>"+results[0].incorrect_answers[1]+"</p><p>"+results[0].correct_answer+"</p><p>"+results[0].incorrect_answers[2]+"</p></div>")
                
            console.log(data)
        }
    })
})