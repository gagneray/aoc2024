import {parseLineByLine} from './inputParser';
import * as path from "node:path";


let safeCount: number = 0;

parseLineByLine(path.join(__dirname, '../inputs/day02_part2.txt'))
    .forEach(value => {
        let split: string[] = value.trim().split(/\s/);

        if (isSafe(split, 0) || isSafe(split.slice(1, split.length), 1)) {
            safeCount++
        }
    })

function isSafe(split: string[], levelRemovedCount: number): boolean {

    if (levelRemovedCount > 1) {
        return false;
    }

    let diff: number = Number(split[1]!) - Number(split[0]!);

    if (diff == 0) {
        return false
    }

    let isIncreasing: boolean = diff > 0;
    for (let i = 1; i < split.length; i++) {
        let a: number = Number(split[i]);
        let b: number = Number(split[i - 1]);

        if (!isValid(isIncreasing, a, b)) {
            return isSafe(split.filter((_value, index) => index != i), levelRemovedCount+1);
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

