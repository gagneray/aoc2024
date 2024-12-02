import * as fs from "node:fs";


function getInputFromFile(path:string): string {
    return fs.readFileSync(path, 'utf-8');
}

export function parseLineByLine(path:string) : string[] {
    return getInputFromFile(path).split('\n', undefined);
}
