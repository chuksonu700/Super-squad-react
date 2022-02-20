import React,{Component} from "react";
import CharacterList from "./component/CharacterList";
import HeroList from "./component/HeroList";
import SquardStats from "./component/SquardStats";
import './styles/index.css'
class App extends Component{
    render(){
        return(
            <div className="container App">
                <h2>SuperSquard</h2>
                <div className='row'>
                    <CharacterList />
                    <HeroList />
                    <SquardStats />
                </div>
            </div>
        )
    }
}

export default App;