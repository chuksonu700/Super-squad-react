import React, {Component} from 'react';
import {connect} from 'react-redux';
class SquardStats extends Component {
    Strenght() {
        let Strenght = 0;
        this.props.heroes.forEach(hero => Strenght += hero.strength);
        return Strenght
    }
    Speed() {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed
    }
    Intelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence
    }
    render(){        
        return(
            <>
                <div className='col-sm-4'>
                    <h2>Squard Stats</h2>
                    <ul className='list-group'>
                    
                            <li  className='list-group-item'>
                                <div className='list-item'><b>speed </b> {this.Speed()}</div>
                            </li>
                            <li  className='list-group-item'>
                                <div className='list-item'><b>intelligence</b> {this.Intelligence()}</div>
                           </li>
                            <li  className='list-group-item'>
                                <div className='list-item'><b>strength</b> {this.Strenght()}</div>
                            </li>
                         
                    </ul>
                </div>
            
            </>
        )
    }
}

//mapstate to props from redux making the state become a props any state becomes props for our component
function mapStateToProps(state){
    return {
        heroes:state.heroes,
    };
}

export default connect(mapStateToProps,null)(SquardStats)