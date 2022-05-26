import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import {TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


interface TodoItem {
  id: number;
  value: string
}

const height = 44;
let count = 1;

function App() {
  const [list, setList] = useState<TodoItem[]>([{ id: 0, value: '' }])

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id ? { ...item, value } : item))
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(prev => prev.filter(item => item.id !== id))
  }

  const handleAdd = (index: number) => {
    const newItem = { id: count++, value: '' }
    setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
  }

  return (
    <div>
      <Container maxWidth="xs" sx={{ mt: 2 }}>

      {list.map((item, index) => (
        <div key={item.id}>
          <TextField
            value={item.value}
            onChange={e => handleChange(e.currentTarget.value, item.id)}
          />
          <IconButton onClick={() => handleAdd(index)}>
          <Button 
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          sx={{ height }}
        >
          Add
        </Button>
          </IconButton>
          {list.length > 1 && (
            <IconButton onClick={() => handleDelete(item.id)}>
              <DeleteIcon />
            </IconButton>
            
          )}
        </div>
      ))}
      </Container>
      <CssBaseline />

    </div>
  )
};

export default App;
