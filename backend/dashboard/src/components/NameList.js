import React from 'react';
import {List,Datagrid,TextField} from 'react-admin';

function NameList(props){
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
            </Datagrid>
        </List>

    );
}

export default NameList;