/* classroom.js */

/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
	return grades.length
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    const sum = grades.reduce(function (total, current) {
        return total + current;
      }, 0);
      return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    return getSumGrades(grades)/grades.length
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    const passedGrades = grades.filter(function(grade) {
        return grade > 10;
    });
    return passedGrades.join(', ')
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    const faledGrades = grades.filter(function(grade) {
        return grade < 10;
    });
    return faledGrades.join(', ')
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    const raisedGrades = grades.map(function(grade) {
        return grade + 1 ;
    });
    return raisedGrades.join(', ')
}