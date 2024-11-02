function addEmpleado() {
    const code = document.getElementById("code").value
    const name = document.getElementById("name").value

    const table = document.getElementById("empleadoTable").getElementsByTagName('tbody')[0]
    const newRow = table.insertRow()

    const codeCell = newRow.insertCell(0)
    const nameCell = newRow.insertCell(1)

    codeCell.textContent = code
    nameCell.textContent = name
    
}
