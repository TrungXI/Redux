import * as  React from 'react';

interface IHeaderProps {

}

interface IHeaderStates {

}

export class Header extends React.Component<IHeaderProps, IHeaderStates> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Quản Lý Công Việc</h1>
            </div>
        );
    }
}