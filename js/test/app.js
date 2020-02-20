const expect = chai.expect

describe("se realizan las sumas correctamente", () => {
    const sumar = ( a, b) => a + b
    it ('al sumar 3 + 5 debe dar 8', () => {
        expect( sumar( 3, 5) ).to.be.equal( 8 )
    })
    it ('al sumar 0 + 0 debe dar 8', () => {
        expect( sumar( 0, 0) ).to.be.equal( 0 )
    })
    it ('al sumar -1 + 0 debe dar 8', () => {
        expect( sumar( -1, 0) ).to.be.equal( -1 )
    })
})
describe("pruebas fibonacci", () => {
    const fibonacci = ( n ) => 2
    it ("la suma de la secuencia de fibonacci para 2 es 2", () => {
        expect( fibonacci(2) ).to.be.equal( 2 )
    })
    it ("la suma de la secuencia de fibonacci para 3 es 4", () => {
        expect( fibonacci(3) ).to.be.equal( 4 )
    })
} )