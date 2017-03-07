import React, {PropTypes, Component} from 'react';

const cn = require('bem-cn')('template-description');

export default class TemplateDescription extends Component {
    static propTypes = {
        name: PropTypes.string.isRequire,
        text: PropTypes.string.isRequire,
        channel: PropTypes.string.isRequire,
        event: PropTypes.string.isRequire,
        status: PropTypes.string.isRequire,
    };

    render() {
        return <div className={cn('wrapper')}>
            <table className={cn}>
                <tr>
                    <td className={cn('title')}>Название шаблона уведомления:</td>
                    <td className={cn('value')}>{this.props.name}</td>
                </tr>
                <tr>
                    <td className={cn('title')}>Текст шаблона:</td>
                    <td className={cn('value')}>{this.props.text}</td>
                </tr>
                <tr>
                    <td className={cn('title')}>Канал доставки уведомления:</td>
                    <td className={cn('value')}>{this.props.channel}</td>
                </tr>
                <tr>
                    <td className={cn('title')}>Событие:</td>
                    <td className={cn('value')}>{this.props.event}</td>
                </tr>
                <tr>
                    <td className={cn('title')}>Статус шаблона в сервисе печати:</td>
                    <td className={cn('value')}>{this.props.status}</td>
                </tr>
            </table>
        </div>
    }

    ender() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
