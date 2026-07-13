

import React, { useRef, useEffect } from 'react'
import { useMemo } from 'react';
import { useDrag } from 'react-dnd'
import useStore from './store'

export default function Portlet({ id })
{
    const ref = useRef()
    const boxData = useStore(state => state.boxData[id] || {})

    const [{ isDragging }, drag, preview] = useDrag({
        type: 'portlet',
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })


    useEffect(() =>
    {
        if (ref.current)
        {
            preview(ref.current, { captureDraggingState: true })
        }
    }, [preview])


    drag(ref)

    const contentId = useMemo(() => `portlet-content-${Math.random().toString(36).slice(2, 10)}`, []);
    return (
        <div ref={ref} className="portlet" style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div className="portlet-title">
                <span className="drag-icon">☰</span>
                {boxData.fdl ? `Form Only ${id + 1}` : `Application(Frame) ${id + 1}`}

            </div>

            <div id={contentId} className={`portlet-content `} data-fdl={boxData.fdl} data-appkey={boxData.appkey}>

            </div>

        </div>
    )
}

