
const root = document.getElementById('root')
root.style.border = "1px black solid"
root.style.width = "500px"
root.style.height = "500px"

const rootChild = root.appendChild(document.createElement('ul'))
const rootChildForm = root.appendChild(document.createElement('form'))
rootChildForm.action = "nextPage"
rootChildForm.method = "get"
const tmpText = rootChildForm.appendChild(document.createElement('h1'))
tmpText.textContent = "누르면 다음 페이지로 넘어가지는 버튼"
const tmpInputTypeBtn = rootChildForm.appendChild(document.createElement('input'))
tmpInputTypeBtn.setAttribute("type","submit")
tmpInputTypeBtn.setAttribute("value","클릭")

rootChild.textContent = "아 어쩌란말이냐 이아픈가슴을"

// export default {
// root,
// rootChild
// }