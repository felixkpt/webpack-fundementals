import React, { useState, useEffect } from 'react';

import axios from 'axios'

import defaultImg from './assets/rYrGwrSju564E3wyK565tSrfTwdfs.png'
// import { useState, useEffect } from 'react/cjs/react.development';

async function fetchUser() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await axios.get('https://randomuser.me/api', config).catch(err => console.log(err))

    const [results] = await res.data.results

    return results

}

export function RandomUserHtml() {

    const [results, setResults] = useState({})
    useEffect(() => {

        const getUser = async () => run()
        // getUser()

    }, [])

    async function run() {
        const res = await fetchUser()
        setResults(() => res)

        document.querySelector('#randomuserBtn').innerHTML = 'Get another user!'
    }

    return (
        <div id="randomuser" className="randomuser">
            <button id="randomuserBtn" className="btn mb-1" onClick={run}>Get random user</button>
            {(results && Object.keys(results).length > 0) ? <UserTemplate results={results} /> : <DefaultTemplate />}
        </div>
    )
}

const DefaultTemplate = () => (
    <div>
        <img src={defaultImg} />
    </div>
)

const UserTemplate = ({ results }) => {

    const { name, picture, phone, dob } = results
    console.log(results)
    return (
        <div>
            <img src={picture.large} />
            <div>
                <h5><span>{name.title}</span> {`${name.first} ${name.last}`}</h5>
            </div>
            <div className="flex flex-col w-70">

                <div className="flex flex-wrap gap-1 justify-center">
                    <span className="bold w-50">Phone</span>
                    <span>{phone}</span>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                    <span className="bold w-50">DOB</span>
                    <span>{new Date(dob.date).toLocaleDateString("en-US")} ({dob.age})</span>
                </div>
            </div>
        </div>
    )
}
