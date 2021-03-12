const fetchData = async () => {
    const data = await axios.get('/chartpath/title')
    console.log(data)
    const dataArray = data.data.map((item) => {
        return item.title
    })
    console.log(dataArray)
    return dataArray
}

fetchData()


const fetchYearData = async () => {
    try {
        const data = await axios.get('/chartpath/title')
        const dataArray = data.data.map((item) => {
            return item.years
        })

        const one = [...dataArray[0]]
        console.log(one)
        return one

    } catch (error) {
        console.log(error)
    }
}

console.log('Fetch Year Data', fetchYearData())




fetchYearData().then((data) => {

    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Year 14', 'Year 15'],
            datasets: [{
                label: `${"Junior Dev"}`,
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(255, 159, 64, 0.1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
})







const dropdown = document.querySelector(".dropdown-menu");
fetchData().then((jobLists) => {
    const createLi = jobLists.map((job) => {
        return `
        <li><a class="dropdown-item active" href="#">${job}</a></li>
        `
    })
    dropdown.innerHTML = createLi.join("");
})

