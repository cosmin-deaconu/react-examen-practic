import React from 'react';
import './PeopleListSidebar.css';

class PeopleListSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            filters: [
                {
                    name: 'filter1',
                    checked: false
                },
                {
                    name: 'filter2',
                    checked: false
                },
                {
                    name: 'filter3',
                    checked: false
                },
                {
                    name: 'filter4',
                    checked: false
                },
                {
                    name: 'filter5',
                    checked: false
                }
            ]
        }
    }

    getCheckedValue(name) {
        const selectedFilter =  this.state.filters.find(filter => filter.name === name);
        return selectedFilter.checked;
    }

    handleCheckboxUiChange(name) {
        const filters = this.state.filters;
        const modifiedFilters = filters.map(filter => {
            if (filter.name !== name && filter.checked) {
                return {
                    ...filter,
                    checked: false
                }
            } else if (filter.name === name) {
                if (filter.checked) {
                    return {
                        ...filter,
                        checked: false
                    }
                } else {
                    return {
                        ...filter,
                        checked: true
                    }
                }
            } else {
                return filter;
            }
        });
        this.setState({filters: modifiedFilters});
    }

    changePeopleByRangeSalary(event, lowerLimit, upperLimit) {
        if (event.target.checked) {
            this.props.filterByRangeSalary(lowerLimit, upperLimit);
        } else {
            this.props.filterByRangeSalary(0, Infinity);
        }
        this.handleCheckboxUiChange(event.target.name);
    }

    changePeopleByName(event) {
        if (event.target.checked) {
            this.props.filterPeopleByName('ascending');
        } else {
            this.props.filterPeopleByName();
        }
        this.handleCheckboxUiChange(event.target.name);
    }

    changePeopleBySalary(event) {
        if (event.target.checked) {
            this.props.filterPeopleBySalary('ascending');
        } else {
            this.props.filterPeopleBySalary();
        }
        this.handleCheckboxUiChange(event.target.name);
    }

    render() {
        return (
            <div className="col-12 col-md-3">
                <p>Filtrează după categorii de salariu:</p>
                <div className="filters-container">
                    <div className="filter">
                        <input
                            type="checkbox"
                            name="filter1"
                            className="mr-2"
                            checked={this.getCheckedValue('filter1')}
                            onChange={(event) => this.changePeopleByRangeSalary(event, 0, 2500)}
                        />
                        <label htmlFor="filter1">&lt; 2500</label>
                    </div>
                    <div className="filter">
                        <input
                            type="checkbox"
                            name="filter2"
                            className="mr-2"
                            checked={this.getCheckedValue('filter2')}
                            onChange={(event) => this.changePeopleByRangeSalary(event, 2500, 4000)}
                        />
                        <label htmlFor="filter2">2500 - 4000</label>
                    </div>
                    <div className="filter">
                        <input
                            type="checkbox"
                            name="filter3"
                            className="mr-2"
                            checked={this.getCheckedValue('filter3')}
                            onChange={(event) => this.changePeopleByRangeSalary(event, 4000, Infinity)}
                        />
                        <label htmlFor="filter3">&gt; 4000</label>
                    </div>
                </div>
                <p>Filtrează după nume:</p>
                <div className="filters-container">
                <div className="filter">
                        <input
                            type="checkbox"
                            name="filter4"
                            className="mr-2"
                            checked={this.getCheckedValue('filter4')}
                            onChange={(event) => this.changePeopleByName(event)}
                        />
                        <label htmlFor="filter4">Nume</label>
                    </div>
                </div>
                <p>Filtrează după salariu:</p>
                <div className="filters-container">
                <div className="filter">
                        <input
                            type="checkbox"
                            name="filter5"
                            className="mr-2"
                            checked={this.getCheckedValue('filter5')}
                            onChange={(event) => this.changePeopleBySalary(event)}
                        />
                        <label htmlFor="filter5">Salariu</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default PeopleListSidebar;