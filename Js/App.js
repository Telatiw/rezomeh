const d = document
const textInput = d.getElementById('textInput')
textInput.addEventListener('keypress',function(event){
    let textAreaValue = textInput.value
    textInput.value = textAreaValue.replace(/:\)/,'😀')
})