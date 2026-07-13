import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import useStore from './store'

export default function DropSlot({ index, children, className })
{
    const ref = useRef()
    const swapBox = useStore(state => state.swapBox)
    const getBoxOrder = useStore.getState().boxOrder // 최신 상태 snapshot

    const [, drop] = useDrop({
        accept: 'portlet',
        drop: (dragged) =>
        {
            const targetId = useStore.getState().boxOrder[index]
            if (dragged.id !== targetId)
            {
                swapBox(dragged.id, targetId)
            }
        }
    })

    drop(ref)

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}