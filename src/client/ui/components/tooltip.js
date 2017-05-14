/**
 * BetterDiscord Tooltip Component
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

'use strict';

const { React, $ } = require('../../vendor');

import { Component } from 'React';

class CToolTip extends Component {

    constructor(props) {
        super(props);
        this.bindings();
        this.setInitialState();
    }

    bindings() {
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    setInitialState() {
        this.state = {
            'visible': this.props.visible || false
        };
    }

    render() {
        const { pos, top, left, text } = this.props;
        const { visible } = this.props;
        return (
            <div className={`tooltip tooltip-${pos || 'top'} tooltip-normal`} style={{ top: top === "auto" ? "auto" : `${top}px`, left: left === "auto" ? "auto" : `${left}px`, display: visible ? '' : 'none' }}>{text}</div>
        )
    }

    show() {
        this.setState({ 'visible': true });
    }

    hide() {
        this.setState({ 'visible': false });
    }

}

export default CToolTip;