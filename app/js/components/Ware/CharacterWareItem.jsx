import React from 'react';
import {ListItem} from 'material-ui/List';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default ({characterWareItem, handleRemoveWare}) => {
	return (
		<ListItem
			rightIcon={<ContentRemove />}
			onTouchTap={ handleRemoveWare }>
			{ characterWareItem.name }
		</ListItem>
	)
}