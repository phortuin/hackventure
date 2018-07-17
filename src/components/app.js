import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Start from './start'
import MailOne from './mail-1'
import BrowserOne from './browser-1'
import ChatOne from './chat-1'
import Terminal from './terminal'

export default function App() {
	return (
		<Router>
			<Start exact path="/" />
			<MailOne exact path="/mail-1" />
			<BrowserOne exact path="/browser-1" />
			<ChatOne exact path="/chat-1" />
			<Terminal exact path="/terminal" />
		</Router>
	)
}
