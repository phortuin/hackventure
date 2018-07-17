import { h } from 'preact'
import Chat from './chat'

export default function ChatOne(props) {
	const chats = [
		{ message: 'hey', mine: false },
		{ message: 'Derp', mine: false },
		{ message: 'everything ok?', mine: false },
		{ message: 'I got your message. seems like everything worked out, right?', mine: false },
		{ message: 'We have to move forward though. I got lots more work for you', mine: false },
		{ message: 'Ok', mine: true },
		{ message: 'cool', mine: false },
		{ message: 'did you see other interesting stuff?', mine: false },
		{ message: 'No I don’t think so, might have missed something but her inbox was mostly marketing stuff', mine: true },
		{ message: 'yeah, she always subscribes to everything 🙄', mine: false }
	]
	return (
		<Chat
			chats={ chats }>
		</Chat>
	)
}
