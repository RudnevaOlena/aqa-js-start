const testGrades = [30, 59, 60, 61, 65, 69, 70, 71, 75, 79, 80, 81, 85, 89, 90,
     91, 95, 100, -1, 101, "text", null, undefined];
testGrades.forEach((averageGrade) => {
    switch (true) {
        case typeof averageGrade !== "number" ||isNaN(averageGrade) || averageGrade < 0 || averageGrade > 100:
            console.log(`${averageGrade} is an invalid grade`);
            break;
        case averageGrade < 60:
            console.log(`${averageGrade} is a failing grade`);
            break;
        case averageGrade <= 70:
            console.log(`${averageGrade} is a satisfactory grade`);
            break;
        case averageGrade <= 80:
            console.log(`${averageGrade} is a good grade`);
            break;
        case averageGrade <= 90:
            console.log(`${averageGrade} is a very good grade`);
            break;
        case averageGrade <= 100:
            console.log(`${averageGrade} is an excellent grade`);
            break;
    }
});