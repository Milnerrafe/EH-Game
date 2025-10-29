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
      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->

      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>Untitled</title>
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



        </script>
      </head>
      <body>

      <style>

          body {
            background-color: #FFD6D5;

      }
          </style>

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
      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->

      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>Untitled</title>
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



        </script>
      </head>
      <body>

      ${html}

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

app.get("/reset", async (c) => {
  try {
    c.env.EH_GAME.delete("html");
  } catch (e) {}

  return c.html(`
    <!DOCTYPE html>
    <html>
      <head>

      <!--Dev 1: All important code is below. This code just styles the page-->

      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <meta charset="utf-8">
        <title>Untitled</title>
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



        </script>
      </head>
      <body>

      <style>

          body {
            background-color: #FFD6D5;

      }
          </style>

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
        `);
});

export default app;
