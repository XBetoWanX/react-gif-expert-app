import { useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);
  
  const onAddCategory = ( newCategory ) => {
    //setCategories( categories.concat(['Valorant']));
    if ( categories.includes( newCategory )) return;

    setCategories([...categories, newCategory])
    //console.log( newCategory )
    
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ onAddCategory }
        />

    
        
        { 
        
          categories.map( ( category ) =>  (
              <GifGrid key={ category } category={ category }/>

            ))
          
        }
          
        
    
    </>
  )
}
