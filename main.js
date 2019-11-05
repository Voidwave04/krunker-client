const {app, BrowserWindow, ipcMain,} = require('electron');
const localShortcut = require('electron-localshortcut');
const path = require('path');
var os = require('os');
const DiscordRPC = require('discord-rpc');
const clientId = '623370457449627659';
DiscordRPC.register(clientId);
const rpc = new DiscordRPC.Client({transport: 'ipc'});
const time = new Date();
debug = process.argv.includes('--dev') || true;


app.commandLine.appendSwitch('ignore-gpu-blacklist');
		app.commandLine.appendSwitch('disable-frame-rate-limit');
		if(os.cpus()[0].model.includes('AMD')) {
			app.commandLine.appendSwitch('enable-zero-copy');
		 }
/*	app.commandLine.appendSwitch('enable-webvr', false);
		app.commandLine.appendSwitch('webxr-hit-test', false);
		app.commandLine.appendSwitch('webxr-plane-detection', false);
		app.commandLine.appendSwitch('webxr-orientation-sensor-device', false);
		app.commandLine.appendSwitch('oculus-vr', false);
		app.commandLine.appendSwitch('openvr', false);
		app.commandLine.appendSwitch('PasswordImport', true);
		app.commandLine.appendSwitch('fill-on-account-select', true);
		app.commandLine.appendSwitch('Passwordexpensive-background-timer-throttlingImport', true);
		app.commandLine.appendSwitch('enable-cloud-printer-handler', false);
		app.commandLine.appendSwitch('enable-autofill-credit-card-ablation-experiment', false);
		app.commandLine.appendSwitch('enable-autofill-credit-card-upload-editable-cardholder-name', false);
		app.commandLine.appendSwitch('enable-autofill-send-experiment-ids-in-payments-rpcs', false);
		app.commandLine.appendSwitch('omnibox-tab-switch-suggestions', false);
		app.commandLine.appendSwitch('enable-parallel-downloading', true);
		app.commandLine.appendSwitch('disable-breakpad');
		app.commandLine.appendSwitch('disable-component-update');
		app.commandLine.appendSwitch('disable-print-preview');
		app.commandLine.appendSwitch('disable-metrics');
		app.commandLine.appendSwitch('disable-metrics-repo');
		app.commandLine.appendSwitch('smooth-scrolling');
		app.commandLine.appendSwitch('enable-javascript-harmony');
		app.commandLine.appendSwitch('enable-future-v8-vm-features');
		app.commandLine.appendSwitch('disable-hang-monitor');
		app.commandLine.appendSwitch('no-referrers');
		app.commandLine.appendSwitch('disable-2d-canvas-clip-aa');
		app.commandLine.appendSwitch('disable-bundled-ppapi-flash');
		app.commandLine.appendSwitch('disable-logging');
		  }
			*/


app.on('ready', () => {

	runGameWin();
	shortcuts();
	runRPC();
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
		localShortcut.register('F5', () => {
			this.gameWin.reload();
		  });
		  localShortcut.register('F4', () => {
			this.gameWin.webContents.executeJavaScript(`document.location.href("https://krunker.io/")`)
	  	});
		localShortcut.register('F11', () => {
			this.gameWin.setFullScreen(!this.gameWin.isFullScreen());
	  	});
		localShortcut.register('Alt+F4', () => {
			app.quit();
		});
	}