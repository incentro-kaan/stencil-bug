Run app with: npm run start

With PostMan
Send request to http://localhost:3000/webcomponents/
Body should be of type JSON
Raw body should be

{
    "webcomponent": "<wc-parent content-string='{\"introtitle\":\"Hoe verstuur je een brievenbuspakje?\"}'></wc-parent>"
}

Change intro-title in wc-parent to introTitle, generate hydrate folder, copy folder to NodeApp and do the steps above.