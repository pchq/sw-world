import React, {Component} from 'react';

import Spinner from '../spinner';

const withDataDetail = (View, getData) => {

    return class extends Component {
        state = {
            data: null,
            loading: false
        };

        componentDidUpdate(prevProps){
            if(this.props.id !== prevProps.id){
                this.updatePerson();
            }
        }

        componentDidMount(){
            if(this.props.id){
                this.updatePerson();
            }
        }
        
        updatePerson = () => {
            const {id} = this.props;

            this.setState({
                loading: true
            });
            getData(id)
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
        };

        render() {
            const {loading, data} = this.state;
            console.log(this.props);

            if (loading)
                return <Spinner/>;

            if (!data)
                return <div className="card"><div className="card-body">Select an element from a list</div></div>;

            return (
                <View {...this.props} data={data}/>
            )
        }
    }
};

export default withDataDetail;