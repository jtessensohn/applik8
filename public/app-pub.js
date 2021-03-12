





// add click listener
document.querySelectorAll('.edit-btn').forEach(button => {

    button.addEventListener('click', function() {
    // get id from row
    const id = this.dataset.id
    // show the edit form 
    const editForm = document.querySelector('.app-update-form')
    editForm.dataset.id = id
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

document.querySelector('.dlt-btn').addEventListener('click', function(event) {
    event.preventDefault()
    const id = this.dataset.id
    fetch(`/application`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({
            company: id.elements.company.value,
            position: id.elements.position.value,
            salary: id.elements.salary.value,
            appDate: id.elements.appDate.value,
            followUpDate: id.elements.followUpDate.value,
            notes: id.elements.notes.value,
        })
    })
    .then(res => {
        if (res.status === 404) {
            alert('Didn\'t delete')
        } else {
            location.reload()
        }
    })
})




const editForm = document.querySelector('.app-update-form')
editForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const id = editForm.dataset.id
    fetch(`/application/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            company: editForm.elements.company.value,
            position: editForm.elements.position.value,
            salary: editForm.elements.salary.value,
            appDate: editForm.elements.appDate.value,
            followUpDate: editForm.elements.followUpDate.value,
            notes: editForm.elements.notes.value,
        })
    })
    .then(res => {
        if (res.status === 404) {
            alert('Can\'t find it')
        } else {
            location.reload()
        }
    })
    
})
