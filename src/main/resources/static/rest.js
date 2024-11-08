async function asyncLerLivros(proxsucesso, proxerro) {
    const URL = `/api/livros`;
    fetch(URL)
      .then(resposta => {
          if (!resposta.ok) throw Error(resposta.status);
          return resposta;
      }) 
      .then(resposta => resposta.json())
      .then(jsonresponse => proxsucesso(jsonresponse))
      .catch(proxerro);
}

async function asyncReservarLivro(id, proxsucesso, proxerro) {
    const URL = `/api/livros/${id}/reservar`;
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resposta => {
        if (!resposta.ok) throw Error(resposta.status);
        return resposta.json();
    })
    .then(jsonresponse => proxsucesso(jsonresponse))
    .catch(proxerro);
}