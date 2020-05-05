import { app , BrowserWindow } from 'electron';

app.on ("ready" , () =>
{
    new BrowserWindow ({ width : 500 , height : 500 });
});