import React from 'react';
import { Text } from 'rebass';
import './PlayerStats.css';

const PlayerStats = (props) => {

    return(
        <Text fontSize={[ 1, 1, 10 ]} fontWeight='medium'>
            <table align="center">
                <thead>
                    <tr>
                        <th>Pts</th>
                        <th>3pm</th>
                        <th>Reb</th>
                        <th>Ast</th>
                        <th>Stl</th>
                        <th>Blk</th>
                        <th>Fg%</th>
                        <th>Ft%</th>
                        <th>TO</th>
                        <th>Gm</th>
                        <th>Gs</th>
                        <th>Mins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.data.pts}</td>
                        <td>{props.data.tpm}</td>
                        <td>{props.data.reb}</td>
                        <td>{props.data.ast}</td>
                        <td>{props.data.stl}</td>
                        <td>{props.data.blk}</td>
                        <td>{props.data.fgp}</td>
                        <td>{props.data.ftp}</td>
                        <td>{props.data.tov}</td>
                        <td>{props.data.g}</td>
                        <td>{props.data.gs}</td>
                        <td>{props.data.mp}</td>
                    </tr>
                </tbody>
            </table> 
        </Text>
    )
}

export default PlayerStats;