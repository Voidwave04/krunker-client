const {app, BrowserWindow} = require('electron');
const localShortcut = require('electron-localshortcut');
const RPC = require('discord-rpc');
const clientId = '643987010704506881';
const scopes = ['rpc', 'rpc.api', 'messages.read'];
const rpc = new RPC.Client({ transport: 'ipc' });
const path = require('path');
var os = require('os');
debug = process.argv.includes('--dev') || false;

app.commandLine.appendSwitch('ignore-gpu-blacklist');
		app.commandLine.appendSwitch('disable-frame-rate-limit');
		if(os.cpus()[0].model.includes('AMD')) {
			app.commandLine.appendSwitch('enable-zero-copy');
		 }

app.on('ready', () => {
	runGameWin();
	shortcuts();
	initRPC();
  })
	function runGameWin() {
		this.gameWin = new BrowserWindow({
			width: 800,
			height: 600,
			show: true,
			frame: true,
			menu: null,
			autoHideMenuBar: true,
			webPreferences: {
				nodeIntegration: false,
	    		preload: path.join(__dirname, 'client.js')
	  		}
		});
		this.gameWin.loadURL('https://krunker.io')
		this.gameWin.removeMenu();
		if (debug) this.gameWin.webContents.openDevTools({ mode: 'undocked' });
	}
	function shortcuts() {
		localShortcut.register('Esc', () => {
			this.gameWin.webContents.executeJavaScript(`
				document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
				document.exitPointerLock();
			`);
	  	});
		localShortcut.register('F4', () => {
			this.gameWin.webcontents.executeJavascript(`window.location.href = "https://krunker.io/"`);
		  });
		localShortcut.register('F5', () => {
			this.gameWin.reload();
		  });
		localShortcut.register('F11', () => {
			this.gameWin.setSimpleFullScreen(!this.gameWin.isSimpleFullScreen());
	  	});
		localShortcut.register('Alt+F4', () => {
			app.quit();
		});
		
	}
function initRPC()
    rpc.login({ clientId }).catch(console.error);
            function initRPC(win) {
                win.window.addEventListener('load', () => { setTimeout(setActivity, 3000); });
            
                async function setActivity() {
                    rpc.setActivity({
                        largeImageKey: 'icon',
                        largeImageText: 'Krunker Client',
                        smallImageKey: "logo",
                        smallImageText: "Made By Voidwave",
                        startTimestamp: Date.now(),
                        instance: true
                    });
                }
            }
        })
