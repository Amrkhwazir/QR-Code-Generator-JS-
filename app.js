var qrImg = document.querySelector('.qrImg')
console.log(qrImg)
var codeInput = document.querySelector('.codeInput')
console.log(codeInput)
var generateBtn = document.querySelector('.generateBtn')
console.log(generateBtn)
var reload = document.querySelector('.reload')

generateBtn.addEventListener('click', generateCode)

function generateCode(){
    qrImg.classList.remove('hidden')
    codeInput.value = " "

}

function reloadBtn(){
    window.location.reload()
}
