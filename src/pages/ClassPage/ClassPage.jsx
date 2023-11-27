import React, { Component } from "react";
import {
    ClassComponentExp,
    ClassComponentTest
} from "../../components/ClassComponent/ClassComponent";


class ClassPage extends Component {
    render() {
        return (
            <>
                <ClassComponentTest />
                <ClassComponentExp />
            </>
        )
    }
}

export default ClassPage