import React, {useState} from 'react'

export const Submit = () => {
    return (
        <div>Submit your own

            <div className="">
                <label>Your pet's name</label>
                <input placeholder="name"></input>
                <label >Your pet's breed</label>
                <input placeholder="breed"></input>
                <label>An image of your pet</label>
                <input placeholder="image URL"></input>
                <button onSubmit={() => console.log('yes')}>Submit</button>
            </div>
        </div>
    )
}