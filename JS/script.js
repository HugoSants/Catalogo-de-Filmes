const cont = document.querySelector('#idcont')


function carregar() {
    fetch('json/filmes.json')
    .then(response => response.json())
    .then(filmes => {
        const cont = document.querySelector('#idcont')
        filmes.map(filme => {
            const local = document.createElement("div")
            local.classList.add("filme")

            const img = document.createElement("img")
            img.src = filme.imagem
            img.alt = filme.titulo

            const titulo = document.createElement("h3")
            titulo.textContent = filme.titulo

            local.appendChild(img)
            local.appendChild(titulo)

            local.addEventListener('mouseover', function() {
                local.style.backgroundColor = 'lightgray';
              });
      
              local.addEventListener('mouseout', function() {
                local.style.backgroundColor = '';
              });

            cont.appendChild(local)
         })
    })
}

carregar();

