import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import Niño from '../../assets/divinoNino.png'
import './TimelineDemo.css';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    data?: string;
}

const TimeLineCronograma: React.FC = () => {

    const events: TimelineEvent[] = [
        { status: 'Inauguración del escolar', date: '09 de marzo', icon: 'pi pi-calendar', color: '#9C27B0', data:'Bienvenida de los escolares', image: Niño },
        { status: 'Bienvenida a los estudiantes de secundaria', date: '24 de marzo', icon: 'pi pi-calendar', color: '#673AB7' },
        { status: 'Bienvenida a los estudiantes de primaria – Show de títeres', date: '15/10/2020 16:15', icon: 'pi pi-calendar', color: '#FF9800' },
        { status: 'Dia de la concientización del autismo', date: '01 de abril', icon: 'pi pi-calendar', color: '#607D8B' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex align-items-center justify-content-center text-white rounded-full shadow-1 p-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && <img src={item.image} alt="" width={200} className="shadow-1" />}
                {item.data && <p>{item.data}</p>}
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}

export default TimeLineCronograma;