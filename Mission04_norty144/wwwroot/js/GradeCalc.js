$("#submit").click(function () {


    var assignWeight = parseFloat(0.5);
    var groupWeight = pareseFloat(0.1);
    var quizWeight = parseFloat(0.1);
    var midWeight = parseFloat(0.1);
    var finalWeight = parseFloat(0.1);
    var intexWeight = parseFloat(0.1);

    
    var assignP = parseFloat($("#assignmentsIN").val());
    var groupP = parseFloat($("#groupIN").val());
    var quizP = parseFloat($("#quizIN").val());
    var midP = parseFloat($("#midtermIN").val());
    var finalP = parseFloat($("#finalIN").val());
    var intexP = parseFloat($("#intexIN").val());

    var totalWeight = assignWeight + groupWeight + quizWeight + midWeight + finalWeight + intexWeight;

    var finalGrade = (assignP * assignWeight + groupP * groupWeight + quizP * quizWeight + midP * midWeight + finalP * finalWeight + intexP * intexWeight) / totalWeight;
    

    var letterGrade;

    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    $("#gradeP").html(letterGrade);
    $("#letter").html(finalGrade);

});