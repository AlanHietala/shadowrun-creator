import React from 'react';
import Subheader from 'material-ui/Subheader';
import List from 'material-ui/List';
import allWare from '../../constants/ware';
import AddWareItem from './AddWareItem.jsx';

export default ({wareList, handleAddWare}) => {
	wareList = allWare.map(ware => <AddWareItem wareItem={ware} handleAddWare={handleAddWare} />)
	return (<List>
		<Subheader>Ware</Subheader>
		{wareList}

	</List>)
}