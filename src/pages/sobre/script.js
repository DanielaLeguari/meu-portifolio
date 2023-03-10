fetch('./cursos.json').then(response => {
    return response.json();
}).then(data => {
    let html = '';
    console.log(data);
    data.forEach(elemento =>
        html +=
        `
    <article class="card card-largura  p-2 m-4 col-12 col-md-3" style="width: 18rem;">
        <div class="card-body fonte-cursos ">
            <h5 class="card-title titulo-card-cursos">${elemento.titulo}</h5>
            <p class="card-text p-0 text-secundary">${elemento.instituicao}</p>
        </div>
    </article>
        `
    );
    document.getElementById("cursos").innerHTML = html;
}).catch(err => {
    console.log(err);
});

