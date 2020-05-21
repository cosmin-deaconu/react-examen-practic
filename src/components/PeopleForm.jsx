import React from 'react';
import './PeopleForm.css';
import {addUser} from '../redux/User/UserAction';
import { connect } from "react-redux"; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledPage = styled.div` 
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background-color: #CCCCCC;
    justify-content: center;
`;

const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 40%;
    height: 80%;
    border-radius: 65px;
    background-color: #FFFFFF;

    .center-div {
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

        .page-text {
            margin-top: 20px;
            color: #000000;
            padding-bottom: 60px;
            font-size: 30px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .label-field{
            margin-right: 20px;
        }

        .text-field{
            {
                color: #000000;
                padding-bottom: 10px;
                margin-bottom: 10px;
                width: auto;
            }
        }

        .submit-button{
            {
                margin-top: 20px;
                margin-bottom: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
                align: center;
                display: flex;
                align-items: center;
                flex-direction: column;
                border-radius: 25px;
            }
        }

        .form {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .login-info {
            margin-top: 30px;
            font-size: x-small;
            justify-content: flex-start;
            padding-bottom: 10px;
        }
    }
`;

const SigninDiv = styled.div`
    border-radius: 65px;
    width: 100%;
    justify-content: center;
`;

class PeopleForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nume: '',
            prenume: '',
            meserie: '',
            data_angajarii: this.getCurrentDate(),
            salariu: '',
            errors: {}
        };

    }

    handleOnNameChange(event) {
        const inputValue = event.target.value;
        this.setState({nume: inputValue});
    }

    handleOnPreNameChange(event) {
        const inputValue = event.target.value;
        this.setState({prenume: inputValue});
    }

    handleOnJobChange(event) {
        const inputValue = event.target.value;
        this.setState({meserie: inputValue});
    }

    handleOnDateChange(event) {
        const inputValue = event.target.value;
        this.setState({data_angajarii: inputValue});
    }

    handleOnSalaryChange(event) {
        const inputValue = event.target.value;
        this.setState({salariu: inputValue});
    }

    handleOnSubmitForm(event){
        event.preventDefault();

        if(this.handleValidation()){
            const {nume, prenume, meserie, salariu, data_angajarii} = this.state;
            this.props.addUser({
                users:{
                    nume,
                    prenume,
                    meserie,
                    salariu,
                    data_angajarii
                }
            })

            this.setState({
                nume: '',
                prenume: '',
                meserie: '',
                data_angajarii: this.getCurrentDate(),
                salariu: '',
                errors: {}
              });
        }
    }

    getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }

    handleValidation(){
        let errors = {};
        let formIsValid = true;

        //Name
        if(!this.state.nume){
           formIsValid = false;
           errors["nume"] = "Trebuie sa introduceti un nume valid";
        }else if(!this.state.prenume){
            formIsValid = false;
            errors["prenume"] = "Trebuie sa introduceti un prenume valid";
         }else if(!this.state.meserie){
            formIsValid = false;
            errors["meserie"] = "Trebuie sa introduceti o meserie valid";
         }else if(!this.state.salariu){
            formIsValid = false;
            errors["salariu"] = "Trebuie sa introduceti un salariu valid";
         }else if(!this.state.data_angajarii){
            formIsValid = false;
            errors["data_angajarii"] = "Trebuie sa introduceti o data a angajarii valida";
         }

       this.setState({ errors });
       return formIsValid;
   }

    render(){
        return (
            <StyledPage data-testid="login-view">
                 <CenterDiv>
                    <SigninDiv className="center-div">
                        <div className="page-text">Add user form</div>
                        <form className="form" onSubmit={(event) => this.handleOnSubmitForm(event)}> 

                            <label htmlFor="name">Nume:</label>
                            <input className="text-field" type="text" name="name" value={this.state.nume} onChange={(event) => this.handleOnNameChange(event)}/>
                            <span style={{color: "red"}}>{this.state.errors["nume"]}</span>

                            <label htmlFor="prenume">Premune:</label>
                            <input className="text-field" type="text" name="prenume" value={this.state.prenume} onChange={(event) => this.handleOnPreNameChange(event)}/>
                            <span style={{color: "red"}}>{this.state.errors["prenume"]}</span>

                            <label htmlFor="meserie">Meserie:</label>
                            <input className="text-field" type="text" name="meserie" value={this.state.meserie} onChange={(event) => this.handleOnJobChange(event)}/>
                            <span style={{color: "red"}}>{this.state.errors["meserie"]}</span>

                            <label htmlFor="salariu">Salariu:</label>
                            <input className="text-field" type="text" name="salariu" value={this.state.salariu} onChange={(event) => this.handleOnSalaryChange(event)}/>
                            <span style={{color: "red"}}>{this.state.errors["salariu"]}</span>

                            <label htmlFor="data_angajarii">Data angajării:</label>
                            <input className="text-field" type="text" name="data_angajarii" value={this.state.data_angajarii} onChange={(event) => this.handleOnDateChange(event)}/>
                            <span style={{color: "red"}}>{this.state.errors["data_angajarii"]}</span>

                            <input className="submit-button" type="submit" value="Submit"></input>

                        </form>

                        <Link to="/people">
                            <input className="submit-button" type="submit" value="People Page"></input>
                        </Link>
                        
                        <p>Numar total de persoane: {this.props.numberOfUsers}</p>
                        
                    </SigninDiv>
                 </CenterDiv>
            </StyledPage>       
        );
    }
}

function mapStateToPros(state){
    return {
        numberOfUsers: state.users.length
    }
}

function mapDispatchToProps(dispatch){
    return {
        addUser: (payload) => dispatch(addUser(payload))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(PeopleForm);
