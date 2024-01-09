import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReportTable() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div>
            <button onClick={() => navigate('/addreport')} className='bg-green-300'>Back TO Report List</button>

            <p>
                Report Table
            </p>
            {id}
        </div>
    );
}

export default ReportTable;
