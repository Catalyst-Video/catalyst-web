# catalyst-web

📷💬 Reliable and scalable open-source video chat in a few lines of code.

For use in vanilla, Angular, Vue, etc. applications.

Have a React app? Use our native React component here: [Catalyst React GitHub](https://github.com/Catalyst-Video/catalyst-react/)!

Check out the full [Catalyst documentation](https://docs.catalyst.chat/docs-getting-started)!

# Installation / Quick Start

1. Add Catalyst to your site 

```html
<link href="https://catalyst-video.github.io/catalyst-web/index.css" rel="stylesheet" />
<script src="https://catalyst-video.github.io/catalyst-web/index.js"></script>
```

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

# Attributes/Parameters & Options

`catalyst-web` is a wrapper around `catalyst-react`. In order for this to be accomplished, HTML5 `data-*` attributes are used to pass information to the underlying React component. You can view a full list of parameters that the **React component** supports at https://docs.catalyst.chat/docs-parameters.



The following parameters are supported by `catalyst-web`:

| Parameter Name       | `data-*` Attribute Name     | Usage                                                        |
| -------------------- | --------------------------- | ------------------------------------------------------------ |
| room                 | data-room                   | Consistent with React component. Pass in a string.           |
| appId                | data-app-id                 | Consistent with React component. Pass in a string.           |
| name                 | data-name                   | Consistent with React component. Pass in a string.           |
| disableChat          | data-disable-chat           | Consistent with React component. Include or exclude the attribute. **See "boolean attributes" below.** |
| disableSetupView     | data-disable-setup-view     | Consistent with React component. Include or exclude the attribute. **See "boolean attributes" below.** |
| disableRefreshButton | data-disable-refresh-button | Consistent with React component. Include or exclude the attribute. **See "boolean attributes" below.** |
| onEndCall            | data-on-end-call            | **INCONSISTENT with React component.**. Pass in a string that will be evaluated as JavaScript. |
|                      |                             |                                                              |

## Boolean Attributes

The boolean parameters/attributes are simply checked for their presence, thus you do not need to pass a value to them. For example, if you wanted to set `disableChat` or `data-disable-chat` to be true in order to hide the chat, you would write the following:

```html
<div
     style="height: 300px; width: 800px;"
     class="catalyst-chat-container"
     <!--    Begin Catalyst Props         -->
     data-room="YOUR_ROOM_NAME_HERE"
     data-app-id="YOUR_APP_ID_HERE"
     data-name="YOUR_USER_NAME_HERE"
	 data-disable-chat
></div>
```

