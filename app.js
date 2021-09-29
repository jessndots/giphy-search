console.log("Let's get this party started!");

let searchTerms

async function searchGiphy(query) {
    let response = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {tag: query, api_key: 'E9qY3RVM46BwiN6SsytilTXOZONf9P34', limit: 1 }});
    const gifURL = response.data.data.image_url;
    $('#gifs').append(`<img src="${gifURL}">`);
}

$('#submit').on('click', function (event) {
    event.preventDefault();
    searchTerms = $('#search').val();
    searchGiphy(searchTerms)
})

$('#remove').on('click', function(event) {
    $('img').remove()
})