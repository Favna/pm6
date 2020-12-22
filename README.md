<div align="center">
  <br/>
<img width=710px src="https://raw.githubusercontent.com/Favna/pm6/main/assets/logo.png" alt="PM6 logo">
  <br/>
<br/>
<b>P</b>(rocess) <b>M</b>(anager) <b>6</b><br/>
  <i>Meme Edition</i>
<br/><br/>

<br/>
<br/>
<br/>
</div>

PM6 is a meme on PM2, the production process manager for Node.js applications with a built-in load balancer.

Starting an application in production mode is as easy as:

```bash
pm6 run -d -p 80:80 my_image service nginx start
```

Works on Linux, macOS, and Windows. Everything is supported.

### Installing pm6

```bash
$ npm install pm6 -g
```

## License

pm2 is made available under the terms of the GNU Affero General Public License 3.0 (AGPL 3.0).
