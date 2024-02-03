import { Component } from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';
class App extends Component {

    constructor() {
        super();


        this.state = {
            monsters: [],
            searchfild: '',

        }
        console.log('1');
    }

    componentDidMount() {
        console.log('3');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => Response.json())
            .then((user) => this.setState(
                () => {
                    return { monsters: user }
                },
                () => {
                    console.log(this.state)
                }))
    }

    onsearchchange = (event) => {
        //console.log({startingarr:this.state.monsters});
        //console.log(event.target.value);
        let searchfild = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchfild };
        }, () => {
            console.log({ endingarr: this.state.monsters })
        }
        )
    }

    render() {
        //console.log('render call from app_js')
        console.log('2');

        const { monsters, searchfild } = this.state;
        const { onsearchchange } = this;

        const mon_filter = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchfild);
        })

        return (

            <div className="App">
                <h1 className='app-title'>Monster Rolodex</h1>
                <SearchBox
                    className='monsters-search-box'
                    placeholder='search-monsters'
                    onChangeHandler={onsearchchange} />
                {/* <input className='search-box'
          type='search'
          placeholder='search the monsters'
          onChange={onsearchchange} /> */}
                {/* {
          mon_filter.map(monster=>{
            return <div key={monster.id}><h2>{monster.name}</h2></div>
          })
        } */}
                <CardList monsters={mon_filter} anything={['a', 'z']} />
            </div>
        );
    }
}

export default App;
