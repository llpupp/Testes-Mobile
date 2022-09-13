describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
       await $('~Forms').click()
       await $('~text-input').setValue('Teste')
       expect(await $ ('~text-input')).toBeDisplayed()
       
       
       
        
    })
   
});