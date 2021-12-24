import React from 'react'

function Options({name, updateItemCount}) {
    return (
        <div>
            <form>
                <input
                    type="checkbox"
                    id={`${name} option`}
                    onChange={(event) => {
                        updateItemCount(name, event.target.checked ? 1 : 0);
                    }} />{" "}
                <label htmlFor={`${name} option`}>{name}</label>
            </form>
        </div>
    )
}

export default Options
