// add click listener
document.querySelectorAll('.edit-btn').forEach(button => {

    button.addEventListener('click', function () {
    // get id from row
    const id = this.dataset.id
    // show the edit form 
    const editForm = document.querySelector('.app-update-form')
    // find edit form on page 
    // change style tag/display to block 
    editForm.style.display = 'block'
    // fill in the form with data from server 
    const company = document.querySelector(`#row-${id} .company`).textContent
    editForm.elements.company.value = company
    const position = document.querySelector(`#row-${id} .position`).textContent
    editForm.elements.position.value = position
    const salary = document.querySelector(`#row-${id} .salary`).textContent
    editForm.elements.salary.value = salary
    const appDate = document.querySelector(`#row-${id} .appDate`).textContent
    editForm.elements.appDate.value = appDate
    const followUpDate = document.querySelector(`#row-${id} .followUpDate`).textContent
    editForm.elements.followUpDate.value = followUpDate
    const notes = document.querySelector(`#row-${id} .notes`).textContent
    editForm.elements.notes.value = notes
    })
})