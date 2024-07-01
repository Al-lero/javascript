// const  studentScores = [95,78,85,60,47,92];


//     let result = studentScores.map((score) =>{
    
//         if (score >= 90 && score <= 100){
//             return "A";
//         } else if (score >= 80 && score <= 89){
//             return "B";
//         } else if(score >= 70 && score <= 79 ){
//             return "C";
//         } else if (score >= 60 && score <= 69){
//             return "D";
//         } else if (score <= 60){
//             return "F";
//         }
//         return score;
//         })


//  console.log(result);

const  studentScores = [95,78,85,60,47,92];


    let result = studentScores.map((score) =>{
        return score >= 90 && score <= 100 ? "A": score >= 80 && score <= 89 ? "B": score >= 70 && score <= 79 ? "C": score >= 60 && score <= 69 ? "D":  "F"

    })