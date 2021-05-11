import {useState} from 'react';

const LogiqueModal = () => {
    const [revele, changeRevele] = useState(false);

    function toggle(){
        changeRevele(!revele)
    }
    return {
        revele,
        toggle
    }

};

export default LogiqueModal;