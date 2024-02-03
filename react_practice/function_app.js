/import { Component } from 'react';
import { useState, useEffect } from 'react';


import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';

const App = () => {



    const [searchfild, setsearchfield] = useState(' ');
    const [monsters, setmonsters] = useState([]);

    const [filterdemonster, setfiltermonster] = useState(monsters);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => Response.json())
            .then((user) => setmonsters(user))

    }, [])
    let mon_filter = [];

    useEffect(() => {

        mon_filter = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchfild);
        })

        setfiltermonster(mon_filter);

    }, [monsters, searchfild])

    // const demo = () => {
    //   console.log('hiii');
    // }
    // demo();

    const onsearchchange = (event) => {
        const searchfildstring = event.target.value.toLowerCase();
        setsearchfield(searchfildstring);
    }

    // console.log(mon_filter)
    return (
        <div className="App">
            <h1 className='app-title'>Monster Rolodex</h1>
            <SearchBox
                className='monsters-search-box'
                placeholder='search-monsters'
                onChangeHandler={onsearchchange} />

            <CardList monsters={filterdemonster} />

        </div>
    )

}