
import React, { Component } from 'react';

import '../styles/listplayer.css';

const ListPlayer = props =>
    <div class="panel panel-primary">
        <div class="panel-heading">{`${props.strPlayer} (${props.strPosition})`}</div>
        <div class="panel-body">
            <div class="col-xs-4">
                <img src={props.strThumb} alt={props.strPlayer} style={{maxWidth:'100%'}}/>
            </div>
            <div class="col-xs-8" id="playerDesc">
                <p>{props.strDescriptionEN}</p>
            </div>
        </div>
    </div>

export default ListPlayer;





