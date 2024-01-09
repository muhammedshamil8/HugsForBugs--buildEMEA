import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReportTable() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className='bg-rose-300 h-screen'>
            <Link to="/addreport" className='bg-green-300'>Back TO Report List</Link>

            <p>
                Report Table
            </p>
            {id}
        </div>
    );
}

export default ReportTable;
