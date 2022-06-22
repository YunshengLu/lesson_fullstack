import React, { useState } from 'react';
import { DndContext, PointerSensor, useSensor, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import UserComponent from './UserComponent'

function App() {

  const [items,setItems] = useState([
    { 
      id: "1",
      name: "John",
    },
    { 
      id: "2",
      name: "Bob",
    },
    { 
      id: "3",
      name: "Tom",
    },
    { 
      id: "4",
      name: "Manoj",
    }
  ])

  const sensors = [useSensor(PointerSensor)]
  const handleDragEnd = ({active, over}) => {
    if(active.id !== over.id){
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
  
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
  
  return (
    <div className="App"
        style={{
          margin: 'auto',
          width: 200,
          textAlign: 'center'
        }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {
              items.map(
                item => <UserComponent {...item} key={item.id} />
              )
            }
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default App