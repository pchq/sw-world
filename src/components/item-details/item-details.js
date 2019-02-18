import React, {Component} from 'react';

import Spinner from '../spinner';

import './item-details.css';

const ItemProp = ({field, label, item}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    ItemProp
};

export default class ItemDetails extends Component {
    
    state = {
        item: null,
        loading: true
    };
    
    componentDidMount(){
        this.updatePerson();
    }
    
    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
            this.updatePerson();
        }
    }
    
    updatePerson = () => {
        const {id, getData} = this.props;
        if (!id) {
            this.setState({
                loading: false
            });
            return;
        }
        
        this.setState({
            loading: true
        });
        getData(id)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                });
            })
    };
    

    render() {
        const {loading, item} = this.state;

        if (loading)
            return <Spinner/>;
            
        if (!item)
            return <div className="card"><div className="card-body">Select a person from a list</div></div>;
        
                
        const {name, image} = item;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                     alt="character"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
