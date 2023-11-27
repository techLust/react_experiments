import axios from "axios";
import React, { Component } from "react";

class ClassComponentTest extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
        const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                this.setState.data = data
            })
    }

    render() {

        const { data } = this.setState

        return (
            <>
                <div>Calss Component Test</div>
                <div>{data.title}</div>
            </>
        )
    }
}

class ClassComponentExp extends Component {
    render() {
        return (
            <>
                <div>Class component experiment</div>
            </>
        )
    }
}

export { ClassComponentTest, ClassComponentExp }