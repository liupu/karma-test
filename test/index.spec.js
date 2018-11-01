describe('index.js test demo',function(){
    it('the isNum fun test',function(){
        expect(isNum(1)).toBe(true)
        expect(isNum('1')).toBe(false)
    })
})