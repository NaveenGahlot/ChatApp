import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider"
import io from "socket.io-client"
const socketContext = createContext();

export const useSocketContext=()=>{
    return useContext(socketContext);
}

export const SocketProvider = ({children}) =>{
    const [socket, setSocket] = useState(null);
    const [authUser] = useAuth()
    const [onlineUsers, setOnlineUsrs] = useState([])

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chatapp-sb95.onrender.com",{
                query: {
                    userId: authUser.user._id,
                },
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsrs(users)
            });
            return()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);
    return(
        <socketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </socketContext.Provider>
    )
};