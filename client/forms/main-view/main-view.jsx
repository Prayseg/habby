import React, {PropTypes, Component} from 'react';
import TemplateMainForm from '../template-main-form/template-main-form';

const cn = require('bem-cn')('main-view');

export default class MainView extends Component {
    constructor() {
        super();
        //this.state = getStateFromFlux();
    }

    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: 'Just add a note!',
    };

    render() {
        return (
            <div className={cn}>
                <h1 className={cn('title')}>Система по управлению шаблонами уведомлений</h1>
                <TemplateMainForm />
            </div>
        );
    }
}