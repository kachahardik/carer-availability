import React, { useState, useEffect } from 'react';

// third party packages
import moment from 'moment';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// component
import WeekCalender from './weekCalender';

const Week = (props) => {

    const { currentDate } = props;
    const [start, setStartDate] = useState('');
    const [end, setEndDate] = useState('');
    const [weekDate, setWeekDate] = useState('');
    const [fullWeek, setFullWeek] = useState([]);

    const getFullWeek = (st, en) => {
        const days = [];
        let today = st;

        while(today <= en){
            const dict = {}
            dict['date'] = today.format("DD")
            dict['day'] = today.format("dddd")
            days.push(dict);
            today = today.clone().add(1, 'd');
        }
        setFullWeek(days);
    }

    const setDates = (st, en) => {
        setStartDate(st)
        setEndDate(en)
        const currentWeekDate = `${st.format('DD/MM/YYYY')} - ${en.format('DD/MM/YYYY')}`;
        setWeekDate(currentWeekDate)
        getFullWeek(st, en)
    }

    const getCurrentWeek = () => {
        const startDate = moment(currentDate).weekday(0);
        const endDate = moment(currentDate).weekday(6);
        setDates(startDate, endDate);
    }

    const handleNextWeek = () => {
        const nextSt = moment(start).weekday(7);
        const nextEnd = moment(end).weekday(13);
        setDates(nextSt, nextEnd);
    }

    const handlePreviousWeek = () => {
        const prevSt = moment(start).weekday(-7);
        const prevEnd = moment(start).weekday(-1);
        setDates(prevSt, prevEnd);
    }

    useEffect(() => {
        getCurrentWeek();
    }, [])

    return (
        <div>
            <ul className="list-inline">
                <li className="list-inline-item"
                    onClick={handlePreviousWeek}>
                    <FiChevronLeft />
                </li>
                <li className="list-inline-item">
                    <div className="currentWeek">{weekDate}</div>
                </li>
                <li className="list-inline-item"
                    onClick={handleNextWeek}>
                    <FiChevronRight />
                </li>
            </ul>

            <WeekCalender data={fullWeek} />
        </div>
    )
}

export default Week
