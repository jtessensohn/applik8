let jobData = null;

const fetchData = async () => {
    const response = await axios.get('/chartpath/title')
    jobData = response.data
    return response.data
}

fetchData()



let input = 0;
const dropdown = document.querySelector(".dropdown-menu");
fetchData().then((jobLists) => {
    const createLi = jobLists.map((job) => {
        return `
        <li><a class="dropdown-item active" href="#" onclick="renderChart('${job.id}')" id="jobLi" data-id="${job.id}">${job.title}</a></li>
        `
    })
    dropdown.innerHTML = createLi.join("");
})


function renderChart(input) {
    const fetchYearData = async () => {
        try {
            const data = await axios.get('/chartpath/title')
        
            const one = data.data.find((job) => {
                return job.id == input
            })
            console.log(one)
            return one
    
        } catch (error) {
            console.log(error)
        }
    }

    // console.log('Fetch Year Data', fetchYearData())

    fetchYearData().then((data) => {
        let wrapper = document.getElementById('myChart');
        wrapper.innerHTML = ("");
        let ctx = document.createElement('canvas')
        wrapper.append(ctx);
        let myChart = new Chart(ctx, {
            type: 'line',
            options: {events:['click']},
            data: {
                labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Year 14', 'Year 15'],
                datasets: [{
                    label: data.title,
                    data: data.years,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(255, 206, 86, 0.1)',
                        'rgba(75, 192, 192, 0.1)',
                        'rgba(153, 102, 255, 0.1)',
                        'rgba(255, 159, 64, 0.1)',
                        'rgba(255, 99, 132, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(255, 206, 86, 0.1)',
                        'rgba(75, 192, 192, 0.1)',
                        'rgba(153, 102, 255, 0.1)',
                        'rgba(255, 159, 64, 0.1)',
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
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },tooltips: {
                enabled: false
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

        wrapper.style.boxShadow = "0px 0px 15px 5px rgba(0,0,0,0.45)"
        wrapper.style.backgroundColor = "rgb(216, 229, 241)"
    })
}








function removeData(chart) {
    careerChart.data.labels.push();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}





//individual plots 

function renderIndividualOptions() {

        
        const myOptions = document.querySelector(`#jobPosition`)
        fetchData().then((jobLists) => {
            const createLi = jobLists.map((job) => {
                let input = jobLists.indexOf(job)
                console.log(input)
        
                return `
                  <option value="${job.id}">${job.title}</option>
                `
            })
            myOptions.innerHTML = createLi.join("");
        });

};
renderIndividualOptions();





let careerwrapper = document.getElementById('careerChart');
careerwrapper.innerHTML = ("");
let ctp = document.createElement('canvas')
careerwrapper.append(ctp);
let careerChart = new Chart(ctp, {
    type: 'line',
    options: {events:['click'], title: {text: ''}},
    data: {
        labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Year 14', 'Year 15'],
        datasets: [],
    },tooltips: {
        enabled: false
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

const submitForm = document.querySelector("#myForm")
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const yearValue = document.getElementById("year").value
    const jobId = document.getElementById("jobPosition").value
    const job = jobData.find(currentJob => currentJob.id == jobId)
    const newData = {
        label: job.title,
        data: new Array(16),
        backgroundColor: [
            'rgba(255, 99, 132, 0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(255, 206, 86, 0.1)',
            'rgba(75, 192, 192, 0.1)',
            'rgba(153, 102, 255, 0.1)',
            'rgba(255, 159, 64, 0.1)',
            'rgba(255, 99, 132, 0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(255, 206, 86, 0.1)',
            'rgba(75, 192, 192, 0.1)',
            'rgba(153, 102, 255, 0.1)',
            'rgba(255, 159, 64, 0.1)',
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
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    };
    newData.data[+yearValue] = job.years[+yearValue]
    careerChart.data.datasets.push(newData)
    careerChart.update();
});