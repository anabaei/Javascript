### Red HaT Docker Config

```
<VirtualHost *:80>
    ServerAdmin webmaster@domain-name
    DocumentRoot /var/www/html/bsb-mktg-stag3/web
    ServerName domain-name

    Redirect permanent / https://domain-name/
    ProxyPass / http://172.17.0.1:8080/
    ProxyPassReverse / http://172.17.0.1:8080/
</VirtualHost>
```