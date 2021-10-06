# catalyst-web
Drop-in video chat for your Vue, Angular, Vanilla, etc. app.

Have a React app? Use our native React component here: 


# Installation / How to use
1. Add Catalyst to your site 
```html
<link href="https://giologist.github.io/catalyst-chat/catalyst-web/index.css" rel="stylesheet" />
<script src="https://giologist.github.io/catalyst-chat/catalyst-web/index.js"></script>```
2. Add the Catalyst element to your page
```html
      <div
        style="height: 300px; width: 800px;"
        class="catalyst-chat-container"
        <!--    Begin Catalyst Props         -->
        data-room="YOUR_ROOM_NAME_HERE"
        data-app-id="YOUR_APP_ID_HERE"
        data-name="YOUR_USER_NAME_HERE"
      ></div>
```
Please note that the div element must have a class of `catalyst-chat-container` for a Catalyst instance to be created and rendered.
