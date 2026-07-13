import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import useStore from './store'
import DropSlot from './DropSlot'
import Portlet from './Portlet'
import './styles.css'

const layoutTypes = [
    /*'layout00',*/ 'layout01', 'layout02', 'layout03',
    /*'layout04', 'layout05', 'layout06', 'layout07',*/
    'layout08'/*, 'layout09', 'layout10', 'layout11'*/, 'custom',

]
const colorClasses = [
    'faded-denim2',
    'ultimate-gray2',
    'princess-blue2',
    'blossom2',
    'classic-blue2',
    'grape-compote2',
    'tanager-turquoise2',
    'polar-night2'
]

export default function App()
{
    const boxOrder = useStore(state => state.boxOrder)
    const [layout, setLayout] = useState('layout02')

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', height: '100vh' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {layoutTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setLayout(type)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '5px',
                                border: layout === type ? '2px solid #007bff' : '1px solid #ccc',
                                background: layout === type ? '#e0f0ff' : '#fff',
                                cursor: 'pointer',
                                textTransform: 'capitalize'
                            }}
                        >
                            {
                                (() =>
                                {

                                    if (type === 'layout01') return '하나의 프로젝트에서 Frame방식1 Form방식1';
                                    if (type === 'layout02') return '두개의 프로젝트에서 Frame방식2 Form방식1';
                                    if (type === 'layout03') return '두개의 프로젝트에서 Frame방식2 Form방식1';
                                    if (type === 'layout08') return '두개의 프로젝트에서 Frame방식2 여러개의 Form';

                                    if (type === 'custom') return '사용자 정의 - 삭제 후 다시 div 동적 생성';
                                    return type; // 기본 출력
                                })()
                            }
                        </button>
                    ))}
                </div>

                {layout === 'custom' ? (
                    <div className="grid">
                        <DropSlot key={0} index={0} className="card faded-denim">
                            <Portlet key={boxOrder[0]} id={boxOrder[0]} />
                        </DropSlot>
                        <DropSlot key={1} index={1} className="card ultimate-gray">
                            <Portlet key={boxOrder[1]} id={boxOrder[1]} />
                        </DropSlot>
                        <DropSlot key={2} index={2} className="card princess-blue">
                            <Portlet key={boxOrder[2]} id={boxOrder[2]} />
                        </DropSlot>
                        <DropSlot key={3} index={3} className="card blossom">
                            <Portlet key={boxOrder[3]} id={boxOrder[3]} />
                        </DropSlot>
                        <DropSlot key={4} index={4} className="card classic-blue">
                            <Portlet key={boxOrder[4]} id={boxOrder[4]} />
                        </DropSlot>
                        <DropSlot key={5} index={5} className="card grape-compote">
                            <Portlet key={boxOrder[5]} id={boxOrder[5]} />
                        </DropSlot>
                        <DropSlot key={6} index={6} className="card tanager-turquoise">
                            <Portlet key={boxOrder[6]} id={boxOrder[6]} />
                        </DropSlot>
                        <DropSlot key={7} index={7} className="card polar-night">
                            <Portlet key={boxOrder[7]} id={boxOrder[7]} />
                        </DropSlot>
                    </div>
                ) : (
                    <div className={`grid grid-${layout}`}>
                        {boxOrder.map((id, index) => (
                            <DropSlot key={index} index={index} className={`card ${colorClasses[index % colorClasses.length]}`}>
                                <Portlet key={`${id}-${index}`} id={id} />
                            </DropSlot>
                        ))}
                    </div>
                )}
            </div>
        </DndProvider>
    )
}

