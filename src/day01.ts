import {parseLineByLine} from './inputParser';
import * as path from "node:path";


var leftList: number[] = []
var rightList: number[] = []

parseLineByLine(path.join(__dirname, '../inputs/day01.txt'))
    .forEach(value => {
        let split = value.split(/\s/);
        leftList.push(Number(split[0]));
        rightList.push(Number(split[split.length-1]));
    })

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);
let total_distance: number = 0;

for(let i=0; i<leftList.length; i++)  {
    total_distance += Math.abs(leftList[i]!-rightList[i]!);
}

console.log(total_distance);
