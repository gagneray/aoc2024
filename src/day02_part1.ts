import {parseLineByLine} from './inputParser';
import * as path from "node:path";


let safeCount: number = 0;

parseLineByLine(path.join(__dirname, '../inputs/day02_part1.txt'))
    .forEach(value => {
        let split = value.trim().split(/\s/);

        if (isSafe(split)) {
            safeCount++
        }
    })

function isSafe(split: string[]): boolean {

    let diff: number = Number(split[1]!) - Number(split[0]!);

    if (diff == 0) {
        return false
    }

    let isIncreasing: boolean = diff > 0;
    for (let i = 1; i < split.length; i++) {
        let a: number = Number(split[i]);
        let b: number = Number(split[i - 1]);

        if (!isValid(isIncreasing, a, b)) {
            return false;
        }
    }

    return true;
}

function isValid(isIncreasing: boolean, a: number, b: number) {

    let diff: number = a - b;
    if (diff == 0) return false;
    if (diff > 0 && !isIncreasing) return false;
    if (diff < 0 && isIncreasing) return false;
    let diffAbs: number = Math.abs(a - b);
    if (diffAbs < 1 || diffAbs > 3) return false;

    return true;
}

console.log(safeCount);

