import { Panel, PanelHeaderTemplateOptions } from "primereact/panel";
import { Ripple } from 'primereact/ripple';
import React from 'react';

interface SeccionType {
    image: string,
    data: string[],
    title: string,
    sideRight: boolean,
}



const Seccion: React.FC<SeccionType> = (seccion) => {

    const template = (options: PanelHeaderTemplateOptions) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-primary`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
                <span className={titleClassName} style={style}>{seccion.title}</span>
            </div>
        );
    };


    return (
        <div className="flex flex-col py-5 lg:flex-row">
            <div className={`px-2 ${seccion.sideRight ? '' : 'order-last'}`}>
                <img src={seccion.image} alt={seccion.title} className="object-cover w-full h-full" />
            </div>

            <div className="m-1 p-1 bg-blue-dark text-white rounded-lg flex flex-col justify-center">
                {/*<text className="text-2xl font-bold mb-4 text-center py-3 ">
                    {seccion.title}
                </text>
                <ul className="list-disc list-inside py-2">
                    {seccion.data.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>*/}

                {<Panel headerTemplate={template} toggleable>
                    {seccion.data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </Panel>}
            </div>
        </div>
    )
}

export default Seccion;