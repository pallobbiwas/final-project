import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='container mx-auto'>
            <AppoinmentBanner date={date} setdate={setDate}></AppoinmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;