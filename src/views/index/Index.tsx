import React, { Component } from 'react'
import IndexHeader from '../../components/index/header/IndexHeader'

interface Props {}

interface State {}

export default class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    static defaultProps = {}

    render() {
        return (
            <div>
                <IndexHeader />
            </div>
        )
    }
}
