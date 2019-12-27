import * as  React from 'react';
import { Product, Header } from './';

interface ITaskFormProps {

}

interface ITaskFormStates {

}

export class TaskForm extends React.Component<ITaskFormProps, ITaskFormStates> {
    constructor(props: ITaskFormProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Product />
            </div>
        );
    }
}