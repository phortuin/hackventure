import { h } from 'preact'
import Mail from './mail'
import Browser from './browser'

export default function MailOne(props) {
	return (
		// <Browser title="Maily app">
		<Mail
			from="Dicky <dicky@geemail.com>"
			sent="Sat Jan 27 2018 09:03:00 GMT+0100 (CET)"
			to="Derp <derp.meister@293.49.189.25>"
			subject="Help me out">
			<p>Hey man! How are you? Heard you got laid off. That sucks, man. Heard a lot of the other guys had to go as well. Asshole shareholders filling their pockets over your backs.</p>
			<p>Here most things are fine. I got a promotion ‘cause I told my boss on some guy who was dicking around all day, how about that :D apparently snitching pays. Can’t say I feel guilty tho, this guy really had to go. Assmuncher, he was.</p>
			<p>Anyway. I have a favor to ask you. You remember my ex? She apparently still has access to my photo cloud. Not sure how that happened. I don’t even know if she knows. The thing is, I can’t kick her out or change the password, because we are in some sort of Family Account of which she is the owner. Fucked up, right. That’s how Ample Cloud rolls, I suppose ;)</p>
			<p>Here’s my plan: I’m going to send a reset link to her email address, and <em>you</em> have to verify that link. I can’t do it myself, because Geemail will send her a warning that someone from my geolocation is trying to access her mail. She’ll definitely know it’s me. Since you still live near her, she won’t understand what’s going on and ignore the warning. People getting oblivious to crappy UX is a godsend for hackers ;)</p>
			<p>Her email address is <a href="/browser-1">darlene.b@geemail.com</a> and her password is mrfluff123 (yeah, Mr. Fluff was our cat... bitch took her with her when she ran off :(</p>
			<p>Thanks buddy. I owe you one.</p>
		</Mail>
		// </Browser>
	)
}
