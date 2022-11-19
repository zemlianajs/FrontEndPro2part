const imgCar = $(`<img>`).appendTo(`#imgCar`);
const title = $(`<p>`).appendTo(`#imgCar`);
const colorPicker = $(`#colorPicker`);


const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const getData = path => {
    $.ajax({
        url: path,
        method: `GET`,
        dataType: "JSON",
        success: data => renderCars(data),
        error: error => console.log(error)  
    })
}

const renderCars = data => {
    $(imgCar)
        .attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${data[0].img}.jpg`)
        .attr(`alt`, `tesla ${data[0].img}`)
        .attr(`class`, `tesla`);

    $(title)
        .attr(`class`, `text`)
        .css('color', `${data[0].color}`)
        .html(data[0].title);

    $.each(data, (index, item) => {
        $(`<button>`).appendTo(colorPicker)
            .attr('class',`btn ${item.img}`)
            .css(`background-color`, item.color)
            .on(`click`, () => {
                $(imgCar)
                    .attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`)
                    .attr(`alt`, `tesla ${item.img}`);
                $(`.text`).css('color', `${item.color}`).html(`${item.title}`)  
            })         
    })
}

getData(API)