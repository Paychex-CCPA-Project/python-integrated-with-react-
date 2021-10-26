import React from 'react';
import {Admin, Resource} from 'react-admin'
import drfProvider from "ra-data-drf";
import {NameList} from "./components/NameList";
import axios from "axios";

function getName() {
  return (
      <Admin dataProvider={drfProvider('http://localhost:8000/api/contact/')}>
        <Resource name='Name' list={NameList}/>
      </Admin>
  );
}

export default App;
