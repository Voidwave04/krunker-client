const {app, BrowserWindow} = require('electron');
const localShortcut = require('electron-localshortcut');
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
