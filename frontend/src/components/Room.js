import React, {useState} from 'react';
import { useParams } from 'react-router';

const Room = (props) => {
    const [votes, setVotes] = useState(2);
    const [pause, setPause] = useState(false);
    const [host, setHost] = useState(false);

    let params = useParams();
    

    function getRoomDetails(){
        fetch("/api/get-room" + "?code=" + params.roomCode).then((response) =>
            response.json()
        ).then((data) => {
            setVotes(data.votes_to_skip),
            setPause(data.guest_can_pause),
            setHost(data.is_host)
        });
    }

    getRoomDetails();
    console.log(votes, pause, host);

    return (
        <div>
            <h3>{params.roomCode}</h3>
            <p>Votes: {votes}</p>
            <p>Guest Can Pause: {pause.toString()}</p>
            <p>Host: {host.toString()}</p>
        </div>
    );
}


export default Room;