import {parseLineByLine} from './inputParser';
import * as path from "node:path";


var leftList: number[] = []
var rightList: number[] = []

parseLineByLine(path.join(__dirname, '../inputs/day01_part2.txt'))
    .forEach(value => {
        let split = value.split(/\s/);
        leftList.push(Number(split[0]));
        rightList.push(Number(split[split.length - 1]));
    })

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

let similarityScore: number = 0;
let rightIndex: number = 0


for (let i = 0; i < leftList.length - 1; i++) {


    if (rightIndex > rightList.length - 1) {
        break;
    }

    let leftValue: number = leftList[i]!;
    let foundIdx: number = indexIncrement(leftValue, rightList.slice(rightIndex, rightList.length - 1));

    if (foundIdx == -1) {
        break;
    }

    rightIndex = rightIndex + foundIdx;

    let currentSimilarity: number = 0;
    while (rightIndex < rightList.length - 1 && leftValue == rightList[rightIndex]) {
        currentSimilarity++;
        rightIndex++;
    }

    similarityScore = similarityScore + leftValue * currentSimilarity;

}

function indexIncrement(value: number, sortedArray: number[]): number {
    let index:number = 0
    while(index < sortedArray.length-1) {
        if(sortedArray[index]! >= value) {
            return index;
        }

        index++;
    }
    return -1;
}

console.log(similarityScore);
