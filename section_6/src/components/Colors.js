import React, {useState} from 'react'

function Colors() {
    const [colors, setColors] = useState([])
    const [idColor, setIdColor] = useState(1)
    const [textColor, setTextColor] = useState("")
    const [indexList, setIndexList] = useState(0)

    function handleColorChange(event){
        setTextColor(event.target.value)
    }

    function handleIndexListChange(event){
        setIndexList(Number(event.target.value))
    }

    function addColor(){
        setColors([...colors, {id: idColor, color: textColor}])
        setTextColor("")
        setIdColor(idColor+1)
    }


    function addColorAtIndex(){
        setColors([
            ...colors.slice(0, indexList),
            {id: idColor, color: textColor},
            ...colors.slice(indexList)
        ])
        setTextColor("")
        setIdColor(idColor+1)
    }

    function removeColorByIndex(){
        setColors(colors.filter((color) => color.id !== indexList))
    }

    function updateColorByIndex(){
        setColors(colors.map((color) => {
            if (color.id === indexList){return {id: color.id, color: textColor}}
            return color
        }))
    }


  return (
    <div>
        <h3>Add Colors</h3>
        <label>Write a color name to be inserted</label>
        <input value={textColor} onChange={handleColorChange}/><br />
        <button onClick={addColor}>Add</button>
        <br />
        <br />
        <h3>Add Colors at index</h3>
        <label>Write a color name to be inserted</label>
        <input value={textColor} onChange={handleColorChange}/> <br />
        <label>Write a index</label>
        <input value={indexList} onChange={handleIndexListChange}/><br />
        <button onClick={addColorAtIndex}>Add Color at Index</button>
        <br />
        <br />

        <h3>Remove colors by index</h3>
        <label>Write the index</label>
        <input value={indexList} onChange={handleIndexListChange}></input>
        <button onClick={removeColorByIndex}>Remove color by index</button>
        <br />
        <br />

        <h3>Update the color</h3>
        <label>Write a new value color</label>
        <input value={textColor} onChange={handleColorChange}/> <br />
        <label>Insert the index of the color </label>
        <input value={indexList} onChange={handleIndexListChange}/>
        <button onClick={updateColorByIndex}>Update color by index</button>

        <br />
        <br />
        <h1>Colors list</h1>
        {colors.map((color) => <p key={color.id}>{color.id}, {color.color}</p>)}
    </div>
  )
}

export default Colors