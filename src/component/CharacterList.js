import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';
class CharacterList extends Component{
    render(){
        console.log('this.props',this.props)
        return(
            <>
                <div className='col-sm-4'>
                    <h2>Characters</h2>
            <ul className='list-group'>
                {
                    this.props.characters.map(character=>{
                        return(
                            <li key={character.id} className='list-group-item'>
                                <div className='list-item'>{character.name}</div>
                                <div className='list-item right-button' onClick={()=>this.props.addCharacterById(character.id)}>+</div>
                            </li>
                        )
                    })
                }
            </ul>
                </div>
            
            </>
        )
    }
}

//mapstate to props from redux making the state become a props any state becomes props for our component
function mapStateToProps(state){
    console.log('state',state)
    return {
        characters:state.characters
    };
}
// mapDispatchToProps to allow our props call actions and update state
//using a shorter syntax bellow
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addCharacterById},dispatch)
    
// }
//connect is used to connect the Component to the store
// export default connect(mapStateToProps,mapDispatchToProps)(CharacterList)

// you can also just paa the function you want to bindtto props into the connect as an object
export default connect(mapStateToProps,{addCharacterById})(CharacterList)