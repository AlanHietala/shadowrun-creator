import React from 'react';
import {ListItem} from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
export default ({wareItem, handleAddWare}) => {
	return (<ListItem
		rightIcon={<ContentAdd />}
		onTouchTap={ () => handleAddWare(wareItem) }>
		{ wareItem.name }
	</ListItem>)
}
