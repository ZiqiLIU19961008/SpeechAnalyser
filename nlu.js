function nlu(params, callback = console.log){
  if(typeof params === 'string') params = {text: params}
  
  // https://console.bluemix.net/apidocs/natural-language-understanding?language=node#text-analytics-features
  params.features = params.features || {
    categories: {},
    concepts: {},
    emotion: {document: true},
    entities: {mentions: true, emotion: true, sentiment: true},
    keywords: {emotion: true, sentiment: true},
    relations: {},
    sentiment: {document: true},
    semantic_roles: {}
  }
  
  const req = new Request('https://ibm-nlu.glitch.me/', {
    method: 'POST', 
    mode: 'cors', 
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  })

  fetch(req)
    .then(response => response.json())
    .then(json => callback(json))
    .catch(e => console.log(e))
}