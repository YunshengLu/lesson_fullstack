import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

export default function UserComponent({id, name}) {

    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging
    } = useSortable({id: id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        border: isDragging ? '1px solid red' : '2px solid black',
        marginButton: 5,
        marginTop: 5,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
    <div 
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
    >
        {name}
    </div>
    )
}
