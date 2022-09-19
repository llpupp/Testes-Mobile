describe('Primeiro teste', () => {
    it('acessar o menu forms', async () => {
       await $('~Forms').click()
       await $('~text-input').setValue('Teste')
       expect(await $ ('~text-input')).toBeDisplayed()
       
       await $('~Dropdown').click()
        const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)
        await button.click()

       
        
    })
   
});