import { app , BrowserWindow } from 'electron';
import url from 'url';
import path from 'path';

import ElectronReload from 'electron-reload';

ElectronReload (url.format ({
    pathname : path.join (__dirname , "view") ,
    protocol : "file:"
}));

app.on ("ready" , () =>
{
    const frame = new BrowserWindow ({ width : 1100 , height : 500 });
    let promise = frame.loadURL (url.format ({
        pathname : path.join (__dirname , "view" , "index.html") ,
        protocol : "file:"
    }));
    frame.removeMenu ();
    promise.then (r =>
    {
        console.log (r);
    })
});