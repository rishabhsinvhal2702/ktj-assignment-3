import React from 'react';
import { useState } from "react";

const ConfirmDelete = () => {
    const [yesno, setYesno] = useState(0);
    return (
        <div className="confirm-del-main-page">
            <button onClick={() => { setYesno(1) }}>yes</button>
            <button onClick={() => { setYesno(0) }}>no</button>
        </div>
    );
}

export default ConfirmDelete;