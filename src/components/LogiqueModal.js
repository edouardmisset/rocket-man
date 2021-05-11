import {useState} from 'react';

const LogiqueModal = () => {
    const [open, closed] = useState(false);

    function toggle(){
        closed(!open)
    }
    return {
        open,
        toggle
    }

};

export default LogiqueModal;