import React from 'react';
import { connect } from "react-redux"; 
import PeopleList from '../components/PeopleList';
import PeopleListSidebar from '../components/PeopleListSidebar';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledDiv = styled.div`
  float: ${props => props.float ? `${props.float}` : 'left'};
  width: ${props => props.width ? `${props.width}%` : '30%'};
  padding: 10px;
  margin: auto;
  text-align: center;

  .home-button{
    {
        margin-top: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        align-items: center;
        flex-direction: column;
        border-radius: 25px;
    }
}
`;

class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filteredItems: []
        }
    }

    filterByRangeSalary(lowerLimit, upperLimit) {
        const filteredItems = this.state.items.filter((product) => product.salariu >= lowerLimit && product.salariu < upperLimit);
        this.setState({ filteredItems });
    }

    filterPeopleByName(props) {
        if(props){
            const copyOfItems = [...this.state.items]
            const filteredItems = copyOfItems.sort((a, b) => a.nume.localeCompare(b.nume))
            this.setState({ filteredItems });
        }
        else{
            const filteredItems = this.state.items; 
            this.setState({ filteredItems });
        }
    }

    filterPeopleBySalary(props) {
        if(props){
            const copyOfItems = [...this.state.items]
            const filteredItems = copyOfItems.sort((a, b) => a.salariu.localeCompare(b.salariu))
            this.setState({ filteredItems });
        }
        else{
            const filteredItems = this.state.items; 
            this.setState({ filteredItems });
        }
    }

    componentDidMount() {
        const { users } = this.props;
        this.setState({
            items: users,
            filteredItems: users
        });
    }

    render(){
        return (
            <div>
                <StyledDiv>
                    <PeopleListSidebar 
                        filterByRangeSalary={(low, high) => this.filterByRangeSalary(low, high)}
                        filterPeopleByName={(props) => this.filterPeopleByName(props)}
                        filterPeopleBySalary={(props) => this.filterPeopleBySalary(props)}
                    />
                    <Link to="/">
                        <input className="home-button" type="submit" value="Home Page"></input>
                    </Link>
                </StyledDiv>
               
                <StyledDiv float = {"right"} width = {50}>
                    <PeopleList users={this.state.filteredItems} />
                </StyledDiv>            
            </div>
        )
    }
}


function mapStateToPros(state){
    return {
        users: state.users
    }
}

export default connect(mapStateToPros)(People);