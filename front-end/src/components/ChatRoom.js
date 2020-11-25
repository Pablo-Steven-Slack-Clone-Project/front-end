import ChannelBar from './ChannelBar.js'
import MainChat from './MainChat.js'
import MessageForm from './MessageForm'
import NavBar from './Navbar'
import '../App.css';

const Chatroom = () => {
    return (
        <>
        <div className="marginLeftAdjustment">
        <NavBar />
        <MainChat />
        <MessageForm />
        </div>
        <ChannelBar />
        </>
    )
}
export default Chatroom