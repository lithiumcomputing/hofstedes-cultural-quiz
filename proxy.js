var http = require('http'),
    httpProxy = require('http-proxy');
    
httpProxy.createProxyServer({target:'http://localhost:4200'}).listen(8000);
