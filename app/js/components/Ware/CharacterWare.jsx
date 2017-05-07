import React from 'react';
import {List} from 'material-ui/List';
import CharacterWareItem from './CharacterWareItem.jsx';

export default ({characterWare, handleRemoveWare}) => {
	const characterWareItems = characterWare
		.map((ware, index) => <CharacterWareItem characterWareItem={ware} handleRemoveWare={ () => { handleRemoveWare(index)} }/>);
	return (<List>
		{characterWareItems}
	</List>)
}