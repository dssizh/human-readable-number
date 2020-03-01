module.exports = function toReadable(number) {

    let matrix = [
        ["", "", ""],
        [" one", " ten", "one hundred"],
        [" two", " twenty", "two hundred"],
        [" three", " thirty", "three hundred"],
        [" four", " forty", "four hundred"],
        [" five", " fifty", "five hundred"],
        [" six", " sixty", "two hundred"],
        [" seven", " seventy", "seven hundred"],
        [" eight", " eighty", "eight hundred"],
        [" nine", " ninety", "nine hundred"],
    ];

    let matrixDec = [
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ]

    strNumber = number.toString();
    if (number == 0) {
        return "zero";
    } else if (number < 20 && number > 9) {
        return matrixDec[Number.parseInt(strNumber[1])].trim()
    } else {
        let size = strNumber.length - 1;
        let str = "";
        for (i = 0; i <= size; i++) {
            if (size == 2) {
                if (i == 0) {
                    str = str + matrix[Number.parseInt(strNumber[i])][0] + " hundred";
                    continue;
                } else if (i == 1 && strNumber[i] == "1") {
                    str = str + matrixDec[Number.parseInt(strNumber[i + 1])];
                    i = i + 1;
                    continue;
                }
            }
            str = str + matrix[Number.parseInt(strNumber[i])][size - i];
        }
        return str.trim();
    }
}
