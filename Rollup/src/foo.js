import "./styles.css"
export default function foo() {
    const element = document.createElement('p')
    element.innerText = "testT"
    document.body.appendChild(element)
} 