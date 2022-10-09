const SERVER_URL = 'http://localhost:5000';

const scrapeWebSite = async (url, store) => {
    const res = await fetch(SERVER_URL + '/api/getItems', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            url,
            store
        })
      });
      if(!res.ok){
        const errMessage = await res.json();
        throw errMessage;
      }
      else return await res.json();
}

export{scrapeWebSite};