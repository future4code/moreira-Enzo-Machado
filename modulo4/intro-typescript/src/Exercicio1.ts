

function checaTriangulho(a:number, b:number, c:number): string {

    if( a !== b && b !== c) {
        let result: string = "Escaleno"
        return result
    } else if ( a === b && b === c) {
        let result: string = "Equilátero"
        return result
    } else {
        let result: string = "Isósceles"
        return result
    }
}

console.log(checaTriangulho(9,7,14))

console.log(checaTriangulho(10,10,12))
console.log(checaTriangulho(60,60,60))