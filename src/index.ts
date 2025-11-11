import { Hono } from "hono";

type Bindings = {
  EH_GAME: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", async (c) => {
  const content = await c.env.EH_GAME.get("html");

  return c.html(
    content
      ? content
      : `
    <!DOCTYPE html>
    <html>

     <!--Dev 2: Dev 1, there is a vulnerability in the body tag-->

      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->


      <link rel="icon" href="data:text/svg;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDExMiAxMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWFzayBpZD0ibWFzazBfMV83NSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiPg0KPHJlY3Qgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNEOUQ5RDkiLz4NCjwvbWFzaz4NCjxnIG1hc2s9InVybCgjbWFzazBfMV83NSkiPg0KPHBhdGggZD0iTTY3LjIgODkuNjAwMVY4MS4yMDAxSDc3LjAwMDFDNzguMTkwMSA4MS4yMDAxIDc5LjE4NzYgODAuNzk3NiA3OS45OTI2IDc5Ljk5MjZDODAuNzk3NiA3OS4xODc2IDgxLjIwMDEgNzguMTkwMSA4MS4yMDAxIDc3LjAwMDFWNjguNjAwMUM4MS4yMDAxIDY1LjQxMTIgODIuMjY5NSA2Mi42Njk1IDg0LjQwODQgNjAuMzc1MUM4Ni41NDczIDU4LjA4MDYgODkuMjExMiA1Ni43MzkgOTIuNDAwMSA1Ni4zNTAxVjU1Ljg4MzRDODkuMjExMiA1NS4yNjEyIDg2LjU0NzMgNTMuODIyMyA4NC40MDg0IDUxLjU2NjdDODIuMjY5NSA0OS4zMTEyIDgxLjIwMDEgNDYuNTg5IDgxLjIwMDEgNDMuNDAwMVYzNS4wMDAxQzgxLjIwMDEgMzMuODEwMSA4MC43OTc2IDMyLjgxMjYgNzkuOTkyNiAzMi4wMDc2Qzc5LjE4NzYgMzEuMjAyNiA3OC4xOTAxIDMwLjgwMDEgNzcuMDAwMSAzMC44MDAxSDY3LjJWMjIuNDAwMUg3Ny4wMDAxQzgwLjUwMDEgMjIuNDAwMSA4My40NzUxIDIzLjYyNTEgODUuOTI1MSAyNi4wNzUxQzg4LjM3NTEgMjguNTI1MSA4OS42MDAxIDMxLjUwMDEgODkuNjAwMSAzNS4wMDAxVjQzLjQwMDFDODkuNjAwMSA0NC41OTAxIDkwLjAwMjYgNDUuNTg3NiA5MC44MDc2IDQ2LjM5MjZDOTEuNjEyNiA0Ny4xOTc2IDkyLjYxMDEgNDcuNjAwMSA5My44MDAxIDQ3LjYwMDFIMTAwLjhWNjQuNDAwMUg5My44MDAxQzkyLjYxMDEgNjQuNDAwMSA5MS42MTI2IDY0LjgwMjYgOTAuODA3NiA2NS42MDc2QzkwLjAwMjYgNjYuNDEyNiA4OS42MDAxIDY3LjQxMDEgODkuNjAwMSA2OC42MDAxVjc3LjAwMDFDODkuNjAwMSA4MC41MDAxIDg4LjM3NTEgODMuNDc1MSA4NS45MjUxIDg1LjkyNTFDODMuNDc1MSA4OC4zNzUxIDgwLjUwMDEgODkuNjAwMSA3Ny4wMDAxIDg5LjYwMDFINjcuMlpNMzUgODkuNjAwMUMzMS41IDg5LjYwMDEgMjguNTI1IDg4LjM3NTEgMjYuMDc1IDg1LjkyNTFDMjMuNjI1IDgzLjQ3NTEgMjIuNCA4MC41MDAxIDIyLjQgNzcuMDAwMVY2OC42MDAxQzIyLjQgNjcuNDEwMSAyMS45OTc1IDY2LjQxMjYgMjEuMTkyNSA2NS42MDc2QzIwLjM4NzUgNjQuODAyNiAxOS4zOSA2NC40MDAxIDE4LjIgNjQuNDAwMUgxMS4yVjQ3LjYwMDFIMTguMkMxOS4zOSA0Ny42MDAxIDIwLjM4NzUgNDcuMTk3NiAyMS4xOTI1IDQ2LjM5MjZDMjEuOTk3NSA0NS41ODc2IDIyLjQgNDQuNTkwMSAyMi40IDQzLjQwMDFWMzUuMDAwMUMyMi40IDMxLjUwMDEgMjMuNjI1IDI4LjUyNTEgMjYuMDc1IDI2LjA3NTFDMjguNTI1IDIzLjYyNTEgMzEuNSAyMi40MDAxIDM1IDIyLjQwMDFINDQuOFYzMC44MDAxSDM1QzMzLjgxIDMwLjgwMDEgMzIuODEyNSAzMS4yMDI2IDMyLjAwNzUgMzIuMDA3NkMzMS4yMDI1IDMyLjgxMjYgMzAuOCAzMy44MTAxIDMwLjggMzUuMDAwMVY0My40MDAxQzMwLjggNDYuNjY2NyAyOS43MzA2IDQ5LjQ0NzMgMjcuNTkxNyA1MS43NDE3QzI1LjQ1MjggNTQuMDM2MiAyMi43ODg5IDU1LjM3NzkgMTkuNiA1NS43NjY3VjU2LjI1MDlDMjIuNzg4OSA1Ni41NTAzIDI1LjQ1MjggNTcuODY2NyAyNy41OTE3IDYwLjIwMDFDMjkuNzMwNiA2Mi41MzM0IDMwLjggNjUuMzMzNCAzMC44IDY4LjYwMDFWNzcuMDAwMUMzMC44IDc4LjE5MDEgMzEuMjAyNSA3OS4xODc2IDMyLjAwNzUgNzkuOTkyNkMzMi44MTI1IDgwLjc5NzYgMzMuODEgODEuMjAwMSAzNSA4MS4yMDAxSDQ0LjhWODkuNjAwMUgzNVoiIGZpbGw9ImJsYWNrIi8+DQo8L2c+DQo8L3N2Zz4=" type="image/svg+xml">


      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>EH-GAME</title>
        <style>



     .luckiest-guy-regular {
      font-family: "Luckiest Guy", cursive;
      font-weight: 400;
      font-style: normal;
    }

    .roboto {
      font-family: "Roboto", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }



    .container {
      position: fixed;
      inset: 0px;
      width: 30rem;
      height: 5rem;
      max-width: 100vw;
      max-height: 100dvh;
      margin: auto;
      text-align: center;
      color: #000
    }

    .title {



    font-size: x-large

    }



    .brake {

      height: 1rem;

    }


        </style>


        <script>

        console.log("Dev 2 - I have locked down this console, Dev 1 the only Vulnerabilities are in the body tag in the elements page")



        </script>
      </head>
      <body>

      <style>

          body {
            background-color: #FFD6D5;

      }
          </style>


      <!--Dev 2: Dev 1, i am sick of your terable code, fix the vulnerability below, it is in the form tag 3 divs deap that is why you may not have seen it-->
      <div class="container roboto">
      <div class="title luckiest-guy-regular">Try Hack This Page </div>


      This Website Has a Major vulnerability that can easily be exploited if you know how. To start your journey, open the developer tools, right click and then inspect element.
      <div class="brake"></div>


        <!--Dev 1: This is where all the important code lies.-->


      <div>

    <form action="/" method="post">

      <label for="html">Pick this Page Color for all users</label>


    <select name="html" id="html" onchange="this.form.submit()" >


    <!--Dev 1: For Ease of use we will make this form submit and html tag the server-->
    <!--Dev 2: Doesn't that make a security risk? A hacker could put whatever they want in that value, Like Text or Viruses-->
    <!--Dev 1: It will be fine. Nobody is going to be hacking this site.-->
      <option value="<style> body { background-color: #FFD6D5; } </style>">Red</option>
      <option value="<style> body { background-color: #FFEED5; } </style>">Orange</option>
      <option value="<style> body { background-color: #D5E7FF; } </style>">Blue</option>
      <option value="<style> body { background-color: #DDFDD5; } </style>">Green</option>
    </select></div>

      </div>





      </body>
    </html>
        `,
  );
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  const html = body.html;

  let content = `
    <!DOCTYPE html>
    <html>

    <!--Dev 2: Dev 1, there is a vulnerability in the body tag-->

      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->

      <link rel="icon" href="data:text/svg;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDExMiAxMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWFzayBpZD0ibWFzazBfMV83NSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiPg0KPHJlY3Qgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNEOUQ5RDkiLz4NCjwvbWFzaz4NCjxnIG1hc2s9InVybCgjbWFzazBfMV83NSkiPg0KPHBhdGggZD0iTTY3LjIgODkuNjAwMVY4MS4yMDAxSDc3LjAwMDFDNzguMTkwMSA4MS4yMDAxIDc5LjE4NzYgODAuNzk3NiA3OS45OTI2IDc5Ljk5MjZDODAuNzk3NiA3OS4xODc2IDgxLjIwMDEgNzguMTkwMSA4MS4yMDAxIDc3LjAwMDFWNjguNjAwMUM4MS4yMDAxIDY1LjQxMTIgODIuMjY5NSA2Mi42Njk1IDg0LjQwODQgNjAuMzc1MUM4Ni41NDczIDU4LjA4MDYgODkuMjExMiA1Ni43MzkgOTIuNDAwMSA1Ni4zNTAxVjU1Ljg4MzRDODkuMjExMiA1NS4yNjEyIDg2LjU0NzMgNTMuODIyMyA4NC40MDg0IDUxLjU2NjdDODIuMjY5NSA0OS4zMTEyIDgxLjIwMDEgNDYuNTg5IDgxLjIwMDEgNDMuNDAwMVYzNS4wMDAxQzgxLjIwMDEgMzMuODEwMSA4MC43OTc2IDMyLjgxMjYgNzkuOTkyNiAzMi4wMDc2Qzc5LjE4NzYgMzEuMjAyNiA3OC4xOTAxIDMwLjgwMDEgNzcuMDAwMSAzMC44MDAxSDY3LjJWMjIuNDAwMUg3Ny4wMDAxQzgwLjUwMDEgMjIuNDAwMSA4My40NzUxIDIzLjYyNTEgODUuOTI1MSAyNi4wNzUxQzg4LjM3NTEgMjguNTI1MSA4OS42MDAxIDMxLjUwMDEgODkuNjAwMSAzNS4wMDAxVjQzLjQwMDFDODkuNjAwMSA0NC41OTAxIDkwLjAwMjYgNDUuNTg3NiA5MC44MDc2IDQ2LjM5MjZDOTEuNjEyNiA0Ny4xOTc2IDkyLjYxMDEgNDcuNjAwMSA5My44MDAxIDQ3LjYwMDFIMTAwLjhWNjQuNDAwMUg5My44MDAxQzkyLjYxMDEgNjQuNDAwMSA5MS42MTI2IDY0LjgwMjYgOTAuODA3NiA2NS42MDc2QzkwLjAwMjYgNjYuNDEyNiA4OS42MDAxIDY3LjQxMDEgODkuNjAwMSA2OC42MDAxVjc3LjAwMDFDODkuNjAwMSA4MC41MDAxIDg4LjM3NTEgODMuNDc1MSA4NS45MjUxIDg1LjkyNTFDODMuNDc1MSA4OC4zNzUxIDgwLjUwMDEgODkuNjAwMSA3Ny4wMDAxIDg5LjYwMDFINjcuMlpNMzUgODkuNjAwMUMzMS41IDg5LjYwMDEgMjguNTI1IDg4LjM3NTEgMjYuMDc1IDg1LjkyNTFDMjMuNjI1IDgzLjQ3NTEgMjIuNCA4MC41MDAxIDIyLjQgNzcuMDAwMVY2OC42MDAxQzIyLjQgNjcuNDEwMSAyMS45OTc1IDY2LjQxMjYgMjEuMTkyNSA2NS42MDc2QzIwLjM4NzUgNjQuODAyNiAxOS4zOSA2NC40MDAxIDE4LjIgNjQuNDAwMUgxMS4yVjQ3LjYwMDFIMTguMkMxOS4zOSA0Ny42MDAxIDIwLjM4NzUgNDcuMTk3NiAyMS4xOTI1IDQ2LjM5MjZDMjEuOTk3NSA0NS41ODc2IDIyLjQgNDQuNTkwMSAyMi40IDQzLjQwMDFWMzUuMDAwMUMyMi40IDMxLjUwMDEgMjMuNjI1IDI4LjUyNTEgMjYuMDc1IDI2LjA3NTFDMjguNTI1IDIzLjYyNTEgMzEuNSAyMi40MDAxIDM1IDIyLjQwMDFINDQuOFYzMC44MDAxSDM1QzMzLjgxIDMwLjgwMDEgMzIuODEyNSAzMS4yMDI2IDMyLjAwNzUgMzIuMDA3NkMzMS4yMDI1IDMyLjgxMjYgMzAuOCAzMy44MTAxIDMwLjggMzUuMDAwMVY0My40MDAxQzMwLjggNDYuNjY2NyAyOS43MzA2IDQ5LjQ0NzMgMjcuNTkxNyA1MS43NDE3QzI1LjQ1MjggNTQuMDM2MiAyMi43ODg5IDU1LjM3NzkgMTkuNiA1NS43NjY3VjU2LjI1MDlDMjIuNzg4OSA1Ni41NTAzIDI1LjQ1MjggNTcuODY2NyAyNy41OTE3IDYwLjIwMDFDMjkuNzMwNiA2Mi41MzM0IDMwLjggNjUuMzMzNCAzMC44IDY4LjYwMDFWNzcuMDAwMUMzMC44IDc4LjE5MDEgMzEuMjAyNSA3OS4xODc2IDMyLjAwNzUgNzkuOTkyNkMzMi44MTI1IDgwLjc5NzYgMzMuODEgODEuMjAwMSAzNSA4MS4yMDAxSDQ0LjhWODkuNjAwMUgzNVoiIGZpbGw9ImJsYWNrIi8+DQo8L2c+DQo8L3N2Zz4=" type="image/svg+xml">

      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>EH-GAME</title>
        <style>



     .luckiest-guy-regular {
      font-family: "Luckiest Guy", cursive;
      font-weight: 400;
      font-style: normal;
    }

    .roboto {
      font-family: "Roboto", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }



    .container {
      position: fixed;
      inset: 0px;
      width: 30rem;
      height: 5rem;
      max-width: 100vw;
      max-height: 100dvh;
      margin: auto;
      text-align: center;
      color: #000
    }

    .title {



    font-size: x-large

    }



    .brake {

      height: 1rem;

    }


        </style>


        <script>


        console.log("Dev 2 - I have locked down this console, Dev 1 the only Vulnerabilities are in the body tag in the elements page")




        </script>
      </head>
      <body>

      ${html}

      <!--Dev 2: Dev 1, i am sick of your terable code, fix the vulnerability below, it is in the form tag 3 divs deap that is why you may not have seen it-->


      <div class="container roboto">
      <div class="title luckiest-guy-regular">Try Hack This Page </div>


      This Website Has a Major vulnerability that can easily be exploited if you know how. To start your journey, open the developer tools, right click and then inspect element.
      <div class="brake"></div>


        <!--Dev 1: This is where all the important code lies.-->


        ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] ? `<div> <form action="/" method="post"> <label for="html">Pick this Page Color for all users</label> <select name="html" id="html" onchange="this.form.submit()" > <!--Dev 1: For Ease of use we will make this form submit and html tag the server--> <!--Dev 2: Doesn't that make a security risk? A hacker could put whatever they want in that value, Like Text or Viruses--> <!--Dev 1: It will be fine. Nobody is going to be hacking this site.--> <option ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] === "#FFD6D5" ? "selected" : ""} value="<style> body { background-color: #FFD6D5; } </style>">Red</option> <option ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] === "#FFEED5" ? "selected" : ""} value="<style> body { background-color: #FFEED5; } </style>">Orange</option> <option ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] === "#D5E7FF" ? "selected" : ""} value="<style> body { background-color: #D5E7FF; } </style>">Blue</option> <option ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] === "#DDFDD5" ? "selected" : ""} value="<style> body { background-color: #DDFDD5; } </style>">Green</option> </select></div>` : ""}







      </div>



       ${html.match(/#?([0-9a-fA-F]{6})/g)?.[0] ? "" : '<style>.bar { background-color: #F42300; color: #FFF; overflow: hidden; position: fixed; bottom: 0; width: 100%; height: 3rem;}</style> <div class="bar roboto">Well done You Have Hacked this Page, the attack you Performed is known as cross-site scripting. Learn more about here <a href="https://owasp.org/www-community/attacks/xss/">XSS Explained</a><form action="/reset" method="post"> <input type="submit" value="Reset This Page"></form</div>'}

      </body>
    </html>
        `;

  await c.env.EH_GAME.put("html", content);
  return c.html(content);
});

app.all("/reset", async (c) => {
  const content = `
    <!DOCTYPE html>
    <html>

    <!--Dev 2: Dev 1, there is a vulnerability in the body tag-->

      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->


      <link rel="icon" href="data:text/svg;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDExMiAxMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWFzayBpZD0ibWFzazBfMV83NSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiPg0KPHJlY3Qgd2lkdGg9IjExMiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNEOUQ5RDkiLz4NCjwvbWFzaz4NCjxnIG1hc2s9InVybCgjbWFzazBfMV83NSkiPg0KPHBhdGggZD0iTTY3LjIgODkuNjAwMVY4MS4yMDAxSDc3LjAwMDFDNzguMTkwMSA4MS4yMDAxIDc5LjE4NzYgODAuNzk3NiA3OS45OTI2IDc5Ljk5MjZDODAuNzk3NiA3OS4xODc2IDgxLjIwMDEgNzguMTkwMSA4MS4yMDAxIDc3LjAwMDFWNjguNjAwMUM4MS4yMDAxIDY1LjQxMTIgODIuMjY5NSA2Mi42Njk1IDg0LjQwODQgNjAuMzc1MUM4Ni41NDczIDU4LjA4MDYgODkuMjExMiA1Ni43MzkgOTIuNDAwMSA1Ni4zNTAxVjU1Ljg4MzRDODkuMjExMiA1NS4yNjEyIDg2LjU0NzMgNTMuODIyMyA4NC40MDg0IDUxLjU2NjdDODIuMjY5NSA0OS4zMTEyIDgxLjIwMDEgNDYuNTg5IDgxLjIwMDEgNDMuNDAwMVYzNS4wMDAxQzgxLjIwMDEgMzMuODEwMSA4MC43OTc2IDMyLjgxMjYgNzkuOTkyNiAzMi4wMDc2Qzc5LjE4NzYgMzEuMjAyNiA3OC4xOTAxIDMwLjgwMDEgNzcuMDAwMSAzMC44MDAxSDY3LjJWMjIuNDAwMUg3Ny4wMDAxQzgwLjUwMDEgMjIuNDAwMSA4My40NzUxIDIzLjYyNTEgODUuOTI1MSAyNi4wNzUxQzg4LjM3NTEgMjguNTI1MSA4OS42MDAxIDMxLjUwMDEgODkuNjAwMSAzNS4wMDAxVjQzLjQwMDFDODkuNjAwMSA0NC41OTAxIDkwLjAwMjYgNDUuNTg3NiA5MC44MDc2IDQ2LjM5MjZDOTEuNjEyNiA0Ny4xOTc2IDkyLjYxMDEgNDcuNjAwMSA5My44MDAxIDQ3LjYwMDFIMTAwLjhWNjQuNDAwMUg5My44MDAxQzkyLjYxMDEgNjQuNDAwMSA5MS42MTI2IDY0LjgwMjYgOTAuODA3NiA2NS42MDc2QzkwLjAwMjYgNjYuNDEyNiA4OS42MDAxIDY3LjQxMDEgODkuNjAwMSA2OC42MDAxVjc3LjAwMDFDODkuNjAwMSA4MC41MDAxIDg4LjM3NTEgODMuNDc1MSA4NS45MjUxIDg1LjkyNTFDODMuNDc1MSA4OC4zNzUxIDgwLjUwMDEgODkuNjAwMSA3Ny4wMDAxIDg5LjYwMDFINjcuMlpNMzUgODkuNjAwMUMzMS41IDg5LjYwMDEgMjguNTI1IDg4LjM3NTEgMjYuMDc1IDg1LjkyNTFDMjMuNjI1IDgzLjQ3NTEgMjIuNCA4MC41MDAxIDIyLjQgNzcuMDAwMVY2OC42MDAxQzIyLjQgNjcuNDEwMSAyMS45OTc1IDY2LjQxMjYgMjEuMTkyNSA2NS42MDc2QzIwLjM4NzUgNjQuODAyNiAxOS4zOSA2NC40MDAxIDE4LjIgNjQuNDAwMUgxMS4yVjQ3LjYwMDFIMTguMkMxOS4zOSA0Ny42MDAxIDIwLjM4NzUgNDcuMTk3NiAyMS4xOTI1IDQ2LjM5MjZDMjEuOTk3NSA0NS41ODc2IDIyLjQgNDQuNTkwMSAyMi40IDQzLjQwMDFWMzUuMDAwMUMyMi40IDMxLjUwMDEgMjMuNjI1IDI4LjUyNTEgMjYuMDc1IDI2LjA3NTFDMjguNTI1IDIzLjYyNTEgMzEuNSAyMi40MDAxIDM1IDIyLjQwMDFINDQuOFYzMC44MDAxSDM1QzMzLjgxIDMwLjgwMDEgMzIuODEyNSAzMS4yMDI2IDMyLjAwNzUgMzIuMDA3NkMzMS4yMDI1IDMyLjgxMjYgMzAuOCAzMy44MTAxIDMwLjggMzUuMDAwMVY0My40MDAxQzMwLjggNDYuNjY2NyAyOS43MzA2IDQ5LjQ0NzMgMjcuNTkxNyA1MS43NDE3QzI1LjQ1MjggNTQuMDM2MiAyMi43ODg5IDU1LjM3NzkgMTkuNiA1NS43NjY3VjU2LjI1MDlDMjIuNzg4OSA1Ni41NTAzIDI1LjQ1MjggNTcuODY2NyAyNy41OTE3IDYwLjIwMDFDMjkuNzMwNiA2Mi41MzM0IDMwLjggNjUuMzMzNCAzMC44IDY4LjYwMDFWNzcuMDAwMUMzMC44IDc4LjE5MDEgMzEuMjAyNSA3OS4xODc2IDMyLjAwNzUgNzkuOTkyNkMzMi44MTI1IDgwLjc5NzYgMzMuODEgODEuMjAwMSAzNSA4MS4yMDAxSDQ0LjhWODkuNjAwMUgzNVoiIGZpbGw9ImJsYWNrIi8+DQo8L2c+DQo8L3N2Zz4=" type="image/svg+xml">

      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
    <meta http-equiv="refresh" content="0; url=/" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>EH-GAME</title>
        <style>



     .luckiest-guy-regular {
      font-family: "Luckiest Guy", cursive;
      font-weight: 400;
      font-style: normal;
    }

    .roboto {
      font-family: "Roboto", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
      font-variation-settings:
        "wdth" 100;
    }



    .container {
      position: fixed;
      inset: 0px;
      width: 30rem;
      height: 5rem;
      max-width: 100vw;
      max-height: 100dvh;
      margin: auto;
      text-align: center;
      color: #000
    }

    .title {



    font-size: x-large

    }



    .brake {

      height: 1rem;

    }


        </style>


        <script>

        console.log("Dev 2 - I have locked down this console, Dev 1 the only Vulnerabilities are in the body tag in the elements page")


        </script>
      </head>
      <body>

      <style>

          body {
            background-color: #FFD6D5;

      }
          </style>


          <!--Dev 2: Dev 1, i am sick of your terable code, fix the vulnerability below, it is in the form tag 3 divs deap that is why you may not have seen it-->


      <div class="container roboto">
      <div class="title luckiest-guy-regular">Try Hack This Page </div>


      This Website Has a Major vulnerability that can easily be exploited if you know how. To start your journey, open the developer tools, right click and then inspect element.
      <div class="brake"></div>


        <!--Dev 1: This is where all the important code lies.-->


      <div>

    <form action="/" method="post">

      <label for="html">Pick this Page Color for all users</label>


    <select name="html" id="html" onchange="this.form.submit()" >


    <!--Dev 1: For Ease of use we will make this form submit and html tag the server-->
    <!--Dev 2: Doesn't that make a security risk? A hacker could put whatever they want in that value, Like Text or Viruses-->
    <!--Dev 1: It will be fine. Nobody is going to be hacking this site.-->
      <option value="<style> body { background-color: #FFD6D5; } </style>">Red</option>
      <option value="<style> body { background-color: #FFEED5; } </style>">Orange</option>
      <option value="<style> body { background-color: #D5E7FF; } </style>">Blue</option>
      <option value="<style> body { background-color: #DDFDD5; } </style>">Green</option>
    </select></div>

      </div>





      </body>
    </html>
        `;

  await c.env.EH_GAME.put("html", content);

  return c.html(content);
});

export default app;
