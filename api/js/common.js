

var getAccessToken = function(auth_url, auth_url) {
  return new Promise((resolve, reject) => { 
    request.post({url: auth_url, headers: auth_headers}, function(error, response, body){
      if (response.statusCode != 200) {
        throw new Error('Error: Response Status Code ' + response.statusCode)
      }
      if (error) {
        throw new Error('Error: ' + error)
      }
      var info = JSON.parse(body);
      if (info.access_token == undefined) {
        throw new Error('Error: No access token')
      }
      resolve(info.access_token);
    });
  }).catch((e) => { console.error(e); throw new Error(e) })
}
// Add comment