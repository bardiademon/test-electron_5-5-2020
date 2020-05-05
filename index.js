import { app , BrowserWindow } from 'electron';
import url from 'url';
import path from 'path';

import ElectronReload from 'electron-reload';

ElectronReload (__dirname);

app.on ("ready" , () =>
{
    const frame = new BrowserWindow ({ width : 500 , height : 500 });
    let promise = frame.loadURL (url.format ({
        pathname : path.join (__dirname , "index.html") ,
        protocol : "file:"
    }));

    promise.then (r =>
    {
        console.log (r);
    })
});