// var client = new HttpClient();
// var request = new HttpRequestMessage();
// request.RequestUri = new Uri("https://receitaws.com.br/v1/cnpj/31308464000193");
// request.Method = HttpMethod.Get;

// request.Headers.Add("Accept", "*/*");
// request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.com)");

// var response = await client.SendAsync(request);
// var result = await response.Content.ReadAsStringAsync();
// Console.WriteLine(result);



var client = new HttpClient();
var request = new HttpRequestMessage();
request.RequestUri = new Uri("https://api-publica.speedio.com.br/buscarcnpj?cnpj=31308464000193");
request.Method = HttpMethod.Get;

request.Headers.Add("Accept", "*/*");
request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.com)");

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);