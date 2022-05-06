import {React,useState} from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'
function ChatScreen() {
    const [input ,setInput]  = useState([])
    const [messages,setMessages]=useState([

        {
            name:"Sarah",
            image:"https://i.pinimg.com/736x/64/95/d0/6495d05033eb2029300f4a6fe5151952.jpg",
            message:"Whats up"
        },
        {
            name:"Sarah",
            image:"https://i.pinimg.com/736x/64/95/d0/6495d05033eb2029300f4a6fe5151952.jpg",
            message:"how is it going"
        },
        {
            message:"hi how are you?"
        }
    ])
    const handleSend = (e)=>{
        e.preventDefault()
        setMessages([...messages,{message:input}])
        setInput("")
    }
    return (
        <div className="chatscreen">
            <p className="chattime">YOU MATCHED WITH ELLEN ON 1/5/2021</p>
            {
                messages.map((message)=>
                    message.name?(
                        <div className="message">
                            <Avatar className="chatimage" alt={message.name} src={message.image}>

                            </Avatar>
                            <p className="chattext">{message.message}</p>
                        </div>
                    ):(
                        <div className="message">
                            <p className="chattextuser">{message.message}</p>
                        </div>
                    )
                    
                
            )}
           
                <form action="" className="chatinput">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" className="inputfield" placeholder="Type a Message..."/>
                    <button type="submit" onClick={handleSend} className="btn">Send</button>
                </form>
        
        </div>
    )

};




export default ChatScreen;
