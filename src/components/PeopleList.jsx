import React from 'react';
import UserItem from './PeopleItem';

function PeopleList (props){
    const {users} = props;
        return (
            <div className="col-12 col-md-9">
                <h1>List of peoples</h1>
                 {users 
                    ? users.map((person, index) => {
                        return(
                            <UserItem
                                key={index}
                                nume={person.nume}
                                prenume={person.prenume}
                                meserie={person.meserie}
                                salariu={person.salariu}
                                data_angajarii={person.data_angajarii}
                            />
                        )}):null
                }
            </div>
        )
}

export default PeopleList;